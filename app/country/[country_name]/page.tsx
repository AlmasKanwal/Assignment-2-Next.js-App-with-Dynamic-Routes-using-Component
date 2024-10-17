import React from 'react';
import { CountryDetails } from "@/types/type"; 
import Link from "next/link";
import CountryCard from "@/app/components/countryCard/countryCard"; 

export default function CountryName({ params }: { params: { country_name: string } }) {
    console.log("Params:", params); // Log params for debugging

    const countryDetails: CountryDetails[] = [
        { name: "Canada", population: 37742154, capital: "Ottawa" },
        { name: "Pakistan", population: 220892331, capital: "Islamabad" },
        { name: "India", population: 1380004385, capital: "New Delhi" },
        { name: "Brazil", population: 212559417, capital: "Brasília" },
        { name: "Australia", population: 25499884, capital: "Canberra" }
    ];

    // Ensure params.country_name exists before trying to use it
    const countryName = params.country_name?.toLowerCase();
    const country = countryName
        ? countryDetails.find((c) => c.name.toLowerCase() === countryName)
        : undefined;

    if (country) {
        return (
            <div className="text-center text-3xl font-bold">
                <CountryCard 
                    name={country.name} 
                    population={country.population} 
                    capital={country.capital} 
                />
                <Link href="/country" className="text-center bg-purple-300">Back to Country List</Link>
            </div>
        );
    } else {
        return (
            <div className="text-center text-3xl font-bold">
                <h1>{params.country_name || "Country"} Not Found</h1>
                <Link href="/country" className="text-center bg-purple-300">Back to Country List</Link>
            </div>
        );
    }
}

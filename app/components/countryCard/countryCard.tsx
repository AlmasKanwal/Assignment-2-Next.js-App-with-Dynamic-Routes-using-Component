import React from 'react';

// Define the structure of the props
interface CountryCardProps {
    name: string;
    population: number;
    capital: string;
}

// CountryCard component with typed props
const CountryCard: React.FC<CountryCardProps> = ({ name, population, capital }) => {
    return (
        <div className="country-card">
            <h2 className="text-4xl font-bold">{name}</h2>
            <p><strong>Population:</strong> {population.toLocaleString()}</p>
            <p><strong>Capital:</strong> {capital}</p>
        </div>
    );
};

export default CountryCard;




import React, { useState } from 'react';

interface Productos {
    id: number;
    href: string;
    img: string;
    title: string;
    marca: string;
    tipo: string;
    tallas: string;
    precio: string;
  }

interface FilterOptionsProps {
  onFilterChange: (selectedFilter: string | null) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value === 'todos' ? null : event.target.value);
  };
}
  
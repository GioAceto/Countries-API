const countries = [{
  name: 'The United States of America',
  region: 'North America',
  capital: 'Washington DC',
  city: 'New York City',
  area: '3,677,649',
  population: '328.2M',
  gdp: '21.43T',
  export: 'Refined petroleum',
  currency: 'US dollar',
  leader: 'Joseph Biden',
  language: 'English'
},
{
  name: 'Canada',
  region: 'North America',
  capital: 'Ottawa',
  city: 'Toronto',
  area: '3,855,100',
  population: '37.59M',
  gdp: '1.74T',
  export: 'Crude petroleum',
  currency: 'Canadian dollar',
  leader: 'Justin Trudeau',
  language: 'English'
},
{
  name: 'Mexico',
  region: 'North America',
  capital: 'Mexico City',
  city: 'Mexico City',
  area: '761,606',
  population: '127.6M',
  gdp: '1.27T',
  export: 'Automobiles',
  currency: 'Mexican peso',
  leader: 'Andrés Manuel López Obrador',
  language: 'Spanish'
},
{
  name: 'Belize',
  region: 'Central America, Caribbean',
  capital: 'Belmopan',
  city: 'Belize City',
  area: '8,867',
  population: '390,353K',
  gdp: '1.88B',
  export: 'Raw sugar',
  currency: 'Belize dollar',
  leader: 'Johnny Briceño',
  language: 'English'
},
{
  name: 'Costa Rica',
  region: 'Central America',
  capital: 'San José',
  city: 'San José',
  area: '19,730',
  population: '5.05M',
  gdp: '61.8B',
  export: 'Medical instruments',
  currency: 'Costa Rican colón',
  leader: 'Carlos Alvarado Quesada',
  language: 'Spanish'
},
{
  name: 'El Salvador',
  region: 'Central America',
  capital: 'San Salvador',
  city: 'San Salvador',
  area: '8,124',
  population: '6.45M',
  gdp: '27.02B',
  export: 'Clothing',
  currency: 'Salvadoran colón',
  leader: 'Carlos Alvarado Quesada',
  language: 'Spanish'
},
{
  name: 'Guatemala',
  region: 'Central America',
  capital: 'Guatemala City',
  city: 'Guatemala City',
  area: '42,042',
  population: '16.6M',
  gdp: '76.71B',
  export: 'Bananas',
  currency: 'Guatemalan quetzal',
  leader: 'Alejandro Giammattei',
  language: 'Spanish'
},
{
  name: 'Honduras',
  region: 'Central America',
  capital: 'Tegucigalpa',
  city: 'Tegucigalpa',
  area: '43,433',
  population: '9.74M',
  gdp: '25.1B',
  export: 'Clothing',
  currency: 'Honduran lempira',
  leader: 'Juan Orlando Hernández',
  language: 'Spanish'
},
{
  name: 'Nicaragua',
  region: 'Central America',
  capital: 'Managua',
  city: 'Managua',
  area: '50,336',
  population: '6.54M',
  gdp: '12.52B',
  export: 'Clothing',
  currency: 'Nicaraguan córdoba',
  leader: 'Daniel Ortega',
  language: 'Spanish'
},
{
  name: 'Panama',
  region: 'Central America',
  capital: 'Panama City',
  city: 'Panama City',
  area: '29,157',
  population: '4.24M',
  gdp: '66.8B',
  export: 'Refined petroleum',
  currency: 'Panamanian balboa, US dollar',
  leader: 'Laurentino Cortizo',
  language: 'Spanish'
},
{
  name: 'Antigua and Barbuda',
  region: 'Caribbean',
  capital: 'Saint John\'s',
  city: 'Saint John\'s',
  area: '108.5',
  population: '80,161',
  gdp: '1.66B',
  export: 'Passenger and cargo ships',
  currency: 'Eastern Caribbean dollar',
  leader: 'Gaston Browne',
  language: 'English'
},
{
  name: 'The Bahamas',
  region: 'Caribbean',
  capital: 'Nassau',
  city: 'Nassau',
  area: '5,358',
  population: '389,482',
  gdp: '13.58B',
  export: 'Passenger and cargo ships',
  currency: 'Bahamian dollar',
  leader: 'Hubert Minnis',
  language: 'English'
},
{
  name: 'Barbados',
  region: 'Caribbean',
  capital: 'Bridgetown',
  city: 'Bridgetown',
  area: '166.4',
  population: 'Example',
  gdp: 'Example',
  export: 'Hard Liquor',
  currency: 'Barbadian dollar',
  leader: 'Mia Mottley',
  language: 'English'
},
{
  name: 'Dominican Republic',
  region: 'Caribbean',
  capital: 'Santo Domingo',
  city: 'Santo Domingo',
  area: '18,704',
  population: '10.74M',
  gdp: '88.94B',
  export: 'Gold',
  currency: 'Dominican peso',
  leader: 'Luis Abinader',
  language: 'Spanish'
},
{
  name: 'Haiti',
  region: 'Caribbean',
  capital: 'Port-au-Prince',
  city: 'Port-au-Prince',
  area: '10,714',
  population: '11.26M',
  gdp: '14.33B',
  export: 'Clothing',
  currency: 'Haitian gourde',
  leader: 'Jovenel Moïse',
  language: 'French'
},
{
  name: 'Cuba',
  region: 'Caribbean',
  capital: 'Example',
  city: 'Havana',
  area: '42,426',
  population: '11.33M',
  gdp: '100B',
  export: 'Rolled tobacco',
  currency: 'Cuban peso',
  leader: 'Miguel Díaz-Canel',
  language: 'Spanish'
},
{
  name: 'Dominica',
  region: 'Caribbean',
  capital: 'Roseau',
  city: 'Roseau',
  area: '290',
  population: '71,808',
  gdp: 'E582.4M',
  export: 'Medical instruments',
  currency: 'Eastern Caribbean dollar',
  leader: 'Charles Savarin',
  language: 'English'
},
{
  name: 'Jamaica',
  region: 'Caribbean',
  capital: 'Kingston',
  city: 'Kingston',
  area: '4,244',
  population: '2.94M',
  gdp: '16.46B',
  export: 'Aluminum oxide',
  currency: 'Jamaican dollar',
  leader: 'Andrew Holness',
  language: 'English'
},
{
  name: 'Grenada',
  region: 'Caribbean',
  capital: 'Saint George\'s',
  city: 'Saint George\'s',
  area: '134.6',
  population: '112,003',
  gdp: '1.21B',
  export: 'Fish',
  currency: 'Eastern Caribbean dollar',
  leader: 'Keith Mitchell',
  language: 'English'
},
{
  name: 'Trinidad and Tobago',
  region: 'Caribbean',
  capital: 'Port of Spain',
  city: 'Chaguanas',
  area: '1,981',
  population: '1.39M',
  gdp: '24.27B',
  export: 'Petroleum gas',
  currency: 'Trinidad and Tobago dollar',
  leader: 'Paula-Mae Weekes',
  language: 'English'
},
{
  name: 'Saint Kitts and Nevis',
  region: 'Caribbean',
  capital: 'Basseterre',
  city: 'Basseterre',
  area: '100.8',
  population: '52,834',
  gdp: '1.05B',
  export: 'Low-voltage protection equipment',
  currency: 'Eastern Caribbean dollar',
  leader: 'Timothy Sylvester Harris',
  language: 'English'
},
{
  name: 'Saint Lucia',
  region: 'Caribbean',
  capital: 'Castries',
  city: 'Castries',
  area: '238.2',
  population: '182,790',
  gdp: '2.12B',
  export: 'Crude petroleum',
  currency: 'Eastern Caribbean dollar',
  leader: 'Allen Michael Chastanet',
  language: 'English'
},
{
  name: 'Saint Vincent and the Grenadines',
  region: 'Caribbean',
  capital: 'Kingstown',
  city: 'Kingstown',
  area: '150.2',
  population: '110,589',
  gdp: '824.7M',
  export: 'Petroleum gas',
  currency: 'Eastern Caribbean dollar',
  leader: 'Ralph Everard Gonsalves',
  language: 'English'
},
{
  name: 'Argentina',
  region: 'South America',
  capital: 'Buenos Aires',
  city: 'Buenos Aires',
  area: '1,073,500',
  population: '44.94M',
  gdp: '445.4B',
  export: 'Soybean meal',
  currency: 'Argentine peso',
  leader: 'Alberto Fernández',
  language: 'Spanish'
},
{
  name: 'Bolivia',
  region: 'South America',
  capital: 'La Paz, Sucre',
  city: 'Santa Cruz de la Sierra',
  area: '424,164',
  population: '11.51M',
  gdp: '40.9B',
  export: 'Petroleum gas',
  currency: 'Bolivian boliviano',
  leader: 'Luis Arce',
  language: 'Spanish'
},
{
  name: 'Brazil',
  region: 'South America',
  capital: 'Brasilia',
  city: 'São Paulo',
  area: '3,287,956',
  population: '211M',
  gdp: '1.84T',
  export: 'Soybeans',
  currency: 'Brazilian real',
  leader: 'Jair Bolsonaro',
  language: 'Portuguese'
},
{
  name: 'Chile',
  region: 'South America',
  capital: 'Santiago',
  city: 'Santiago',
  area: '291,933',
  population: '18.95M',
  gdp: '282.3B',
  export: 'Copper ore',
  currency: 'Chilean peso',
  leader: 'Sebastián Piñera',
  language: 'Spanish'
},
{
  name: 'Colombia',
  region: 'South America, Caribbean',
  capital: 'Bogotá',
  city: 'Bogotá',
  area: '440,831',
  population: '50.34M',
  gdp: '323.6B',
  export: 'Crude petroleum',
  currency: 'Colombian peso',
  leader: 'Iván Duque Márquez',
  language: 'Spanish'
},
{
  name: 'Ecuador',
  region: 'South America',
  capital: 'Quito',
  city: 'Guayaquil',
  area: '106,889',
  population: '17.37M',
  gdp: '107.4B',
  export: 'Crude petroleum',
  currency: 'US dollar',
  leader: 'Lenín Moreno',
  language: 'Spanish'
},
{
  name: 'Guyana',
  region: 'South America, Caribbean',
  capital: 'Georgetown',
  city: 'Georgetown',
  area: '83,000',
  population: '782,766',
  gdp: '5.17B',
  export: 'Special purpose ships',
  currency: 'Guyanese dollar',
  leader: 'Irfaan Ali',
  language: 'English'
},
{
  name: 'Paraguay',
  region: 'South America',
  capital: 'Asunción',
  city: 'Asunción',
  area: '157,048',
  population: '7.04M',
  gdp: '38.15B',
  export: 'Soybeans',
  currency: 'Paraguayan guaraní',
  leader: 'Mario Abdo Benítez',
  language: 'Guaraní'
},
{
  name: 'Peru',
  region: 'South America',
  capital: 'Lima',
  city: 'Lima',
  area: '496,225',
  population: '32.51M',
  gdp: '226.8B',
  export: 'Copper ore',
  currency: 'Nuevo sol',
  leader: 'Francisco Sagasti',
  language: 'Spanish'
},
{
  name: 'Suriname',
  region: 'South America, Caribbean',
  capital: 'Paramaribo',
  city: 'Paramaribo',
  area: '63,250',
  population: '581,363',
  gdp: '3.69B',
  export: 'Gold',
  currency: 'Surinamese dollar',
  leader: 'Chan Santokhi',
  language: 'Dutch'
},
{
  name: 'Uruguay',
  region: 'South America',
  capital: 'Montevideo',
  city: 'Montevideo',
  area: '68,037',
  population: '3.46M',
  gdp: '56.05B',
  export: 'Wood pulp',
  currency: 'Uruguayan peso',
  leader: 'Luis Lacalle Pou',
  language: 'Spanish'
},
{
  name: 'Venezuela',
  region: 'South America, Caribbean',
  capital: 'Caracas',
  city: 'Caracas',
  area: '353,841',
  population: '28.52M',
  gdp: '482.4B',
  export: 'Crude petroleum',
  currency: 'Bolívar soberano',
  leader: 'Nicolás Maduro, Juan Guaidó',
  language: 'Spanish'
}
]

module.exports = countries

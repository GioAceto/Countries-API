const countries = [{
  name: 'The United States of America',
  region: 'North America',
  capital: 'Washington DC',
  city: 'New York City',
  area: '3,805,943',
  population: '328.2M',
  gdp: '21.43T',
  export: 'Refined petroleum',
  currency: 'US dollar',
  leader: 'Joseph Biden',
  flag: '🇺🇸'
},
{
  name: 'Canada',
  region: 'North America',
  capital: 'Ottawa',
  city: 'Toronto',
  area: '3,511,022',
  population: '37.59M',
  gdp: '1.74T',
  export: 'Crude petroleum',
  currency: 'Canadian dollar',
  leader: 'Justin Trudeau',
  flag: '🇨🇦'
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
  flag: '🇲🇽'
},
{
  name: 'Belize',
  region: ['Central America', 'Caribbean'],
  capital: 'Belmopan',
  city: 'Belize City',
  area: '8,867',
  population: '390,353K',
  gdp: '1.88B',
  export: 'Raw sugar',
  currency: 'Belize dollar',
  leader: 'Johnny Briceño',
  flag: '🇧🇿'
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
  flag: '🇨🇷'
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
  flag: '🇸🇻'
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
  flag: '🇬🇹'
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
  flag: '🇭🇳'
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
  flag: '🇳🇮'
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
  currency: ['Panamanian balboa', 'US dollar'],
  leader: 'Laurentino Cortizo',
  flag: '🇵🇦'
},
{
  name: 'Antigua and Barbuda',
  region: 'The Caribbean',
  capital: 'Saint John\'s',
  city: 'Saint John\'s',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Passenger and cargo ships',
  currency: 'Eastern Caribbean dollar',
  leader: 'Gaston Browne',
  flag: '🇦🇬'
},
{
  name: 'The Bahamas',
  region: 'The Caribbean',
  capital: 'Nassau',
  city: 'Nassau',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Passenger and cargo ships',
  currency: 'Bahamian dollar',
  leader: 'Hubert Minnis',
  flag: '🇧🇸'
},
{
  name: 'Barbados',
  region: 'The Caribbean',
  capital: 'Bridgetown',
  city: 'Bridgetown',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Liquor',
  currency: 'Barbadian dollar',
  leader: 'Mia Mottley',
  flag: '🇧🇧'
},
{
  name: 'Dominican Republic',
  region: 'The Caribbean',
  capital: 'Santo Domingo',
  city: 'Santo Domingo',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Gold',
  currency: 'Dominican peso',
  leader: 'Luis Abinader',
  flag: '🇩🇴'
},
{
  name: 'Haiti',
  region: 'The Caribbean',
  capital: 'Port-au-Prince',
  city: 'Port-au-Prince',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Clothing',
  currency: 'Haitian gourde',
  leader: 'Jovenel Moïse',
  flag: '🇭🇹'
},
{
  name: 'Cuba',
  region: 'The Caribbean',
  capital: 'Example',
  city: 'Havana',
  area: 'Havana',
  population: 'Example',
  gdp: 'Example',
  export: 'Rolled tobacco',
  currency: 'Cuban peso',
  leader: 'Miguel Díaz-Canel',
  flag: '🇨🇺'
},
{
  name: 'Dominica',
  region: 'The Caribbean',
  capital: 'Roseau',
  city: 'Roseau',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Medical instruments',
  currency: 'Eastern Caribbean dollar',
  leader: 'Charles Savarin',
  flag: '🇩🇲'
},
{
  name: 'Jamaica',
  region: 'The Caribbean',
  capital: 'Kingston',
  city: 'Kingston',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Aluminum oxide',
  currency: 'Jamaican dollar',
  leader: 'Andrew Holness',
  flag: '🇯🇲'
},
{
  name: 'Grenada',
  region: 'The Caribbean',
  capital: 'Saint George\'s',
  city: 'Saint George\'s',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Fish',
  currency: 'Eastern Caribbean dollar',
  leader: 'Keith Mitchell',
  flag: '🇬🇩'
},
{
  name: 'Trinidad and Tobago',
  region: 'The Caribbean',
  capital: 'Port of Spain',
  city: 'Chaguanas',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Petroleum gas',
  currency: 'Trinidad and Tobago dollar',
  leader: 'Paula-Mae Weekes',
  flag: '🇹🇹'
},
{
  name: 'Saint Kitts and Nevis',
  region: 'The Caribbean',
  capital: 'Basseterre',
  city: 'Basseterre',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Low-voltage protection equipment',
  currency: 'Eastern Caribbean dollar',
  leader: 'Timothy Sylvester Harris',
  flag: '🇰🇳'
},
{
  name: 'Saint Lucia',
  region: 'The Caribbean',
  capital: 'Castries',
  city: 'Castries',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Crude petroleum',
  currency: 'Eastern Caribbean dollar',
  leader: 'Allen Michael Chastanet',
  flag: '🇱🇨'
},
{
  name: 'Saint Vincent and the Grenadines',
  region: 'The Caribbean',
  capital: 'Kingstown',
  city: 'Kingstown',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Petroleum gas',
  currency: 'Eastern Caribbean dollar',
  leader: 'Ralph Everard Gonsalves',
  flag: '🇻🇨'
},
{
  name: 'Argentina',
  region: 'The Caribbean',
  capital: 'Buenos Aires',
  city: 'Buenos Aires',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Soybean meal',
  currency: 'Argentine peso',
  leader: 'Alberto Fernández',
  flag: '🇦🇷'
},
{
  name: 'Bolivia',
  region: 'The Caribbean',
  capital: ['La Paz', 'Sucre'],
  city: 'Santa Cruz de la Sierra',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Petroleum gas',
  currency: 'Bolivian boliviano',
  leader: 'Luis Arce',
  flag: '🇧🇴'
},
{
  name: 'Brazil',
  region: 'The Caribbean',
  capital: 'Brasilia',
  city: 'São Paulo',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Soybeans',
  currency: 'Brazilian real',
  leader: 'Jair Bolsonaro',
  flag: '🇧🇷'
},
{
  name: 'Chile',
  region: 'The Caribbean',
  capital: 'Santiago',
  city: 'Santiago',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Copper ore',
  currency: 'Chilean peso',
  leader: 'Sebastián Piñera',
  flag: '🇨🇱'
},
{
  name: 'Colombia',
  region: ['South America', 'The Caribbean'],
  capital: 'Bogotá',
  city: 'Bogotá',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Crude petroleum',
  currency: 'Colombian peso',
  leader: 'Iván Duque Márquez',
  flag: '🇨🇴'
},
{
  name: 'Ecuador',
  region: 'The Caribbean',
  capital: 'Quito',
  city: 'Guayaquil',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Crude petroleum',
  currency: 'US dollar',
  leader: 'Lenín Moreno',
  flag: '🇪🇨'
},
{
  name: 'Guyana',
  region: ['South America', 'The Caribbean'],
  capital: 'Georgetown',
  city: 'Georgetown',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Special purpose ships',
  currency: 'Guyanese dollar',
  leader: 'Irfaan Ali',
  flag: '🇬🇾'
},
{
  name: 'Paraguay',
  region: 'The Caribbean',
  capital: 'Asunción',
  city: 'Asunción',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Soybeans',
  currency: 'Paraguayan guaraní',
  leader: 'Mario Abdo Benítez',
  flag: '🇵🇾'
},
{
  name: 'Peru',
  region: 'The Caribbean',
  capital: 'Lima',
  city: 'Lima',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Copper ore',
  currency: 'Nuevo sol',
  leader: 'Francisco Sagasti',
  flag: '🇵🇪'
},
{
  name: 'Suriname',
  region: ['South America', 'The Caribbean'],
  capital: 'Paramaribo',
  city: 'Paramaribo',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Gold',
  currency: 'Surinamese dollar',
  leader: 'Chan Santokhi',
  flag: '🇸🇷'
},
{
  name: 'Uruguay',
  region: 'The Caribbean',
  capital: 'Montevideo',
  city: 'Montevideo',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Wood pulp',
  currency: 'Uruguayan peso',
  leader: 'Luis Lacalle Pou',
  flag: '🇺🇾'
},
{
  name: 'Venezuela',
  region: ['South America', 'The Caribbean'],
  capital: 'Caracas',
  city: 'Caracas',
  area: 'Example',
  population: 'Example',
  gdp: 'Example',
  export: 'Crude petroleum',
  currency: 'Bolívar soberano',
  leader: ['Nicolás Maduro', 'Juan Guaidó'],
  flag: '🇻🇪'
}
]

module.exports = countries

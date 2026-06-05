import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME, trimMetaDescription } from "@/lib/seo";

export type ElectricianPage = {
  id: number; title: string; slug: string; primaryKeyword: string; secondaryKeywords: string[]; targetArea: string; city: string; province: string; citySlug: string; pageType: string; searchIntent: string; volume: number; keywordDifficulty: number; cpc: number; priority: string; ctaStrategy: string; serviceSlug: string; serviceName: string;
};

export type ElectricianService = { name: string; slug: string; keyword: string; summary: string; intro: string };
export type ElectricianCity = { name: string; province: string; slug: string };

export const ELECTRICIAN_SERVICES = [
  {
    "name": "Emergency Electrician",
    "slug": "emergency-electrician",
    "keyword": "emergency electrician",
    "summary": "Urgent electrical help for outages, burning smells, tripped breakers, sparking devices, unsafe panels, and after-hours problems.",
    "intro": "Urgent electrical help for outages, burning smells, tripped breakers, sparking devices, unsafe panels, and after-hours problems."
  },
  {
    "name": "Residential Electrician",
    "slug": "residential-electrician",
    "keyword": "residential electrician",
    "summary": "Home electrical service for panels, outlets, lighting, wiring, safety checks, renovations, and appliance circuits.",
    "intro": "Home electrical service for panels, outlets, lighting, wiring, safety checks, renovations, and appliance circuits."
  },
  {
    "name": "Commercial Electrician",
    "slug": "commercial-electrician",
    "keyword": "commercial electrician",
    "summary": "Business electrical service for offices, retail, light industrial spaces, tenant improvements, lighting, circuits, and code-focused repairs.",
    "intro": "Business electrical service for offices, retail, light industrial spaces, tenant improvements, lighting, circuits, and code-focused repairs."
  },
  {
    "name": "Electrical Repair",
    "slug": "electrical-repair",
    "keyword": "electrical repair",
    "summary": "Electrical repair and troubleshooting for faults, breaker trips, flickering lights, damaged devices, and circuits that need diagnosis.",
    "intro": "Electrical repair and troubleshooting for faults, breaker trips, flickering lights, damaged devices, and circuits that need diagnosis."
  },
  {
    "name": "Local Electrician",
    "slug": "electrician-near-me",
    "keyword": "local electrician",
    "summary": "Licensed local electrician help for repairs, installations, inspections, troubleshooting, and planned electrical work.",
    "intro": "Licensed local electrician help for repairs, installations, inspections, troubleshooting, and planned electrical work."
  }
] as const satisfies ElectricianService[];

export const ELECTRICIAN_CITIES = [
  {
    "name": "Edmonton",
    "province": "AB",
    "slug": "edmonton"
  },
  {
    "name": "Calgary",
    "province": "AB",
    "slug": "calgary"
  },
  {
    "name": "Toronto",
    "province": "ON",
    "slug": "toronto"
  },
  {
    "name": "Vancouver",
    "province": "BC",
    "slug": "vancouver"
  },
  {
    "name": "Ottawa",
    "province": "ON",
    "slug": "ottawa"
  },
  {
    "name": "Mississauga",
    "province": "ON",
    "slug": "mississauga"
  },
  {
    "name": "Winnipeg",
    "province": "MB",
    "slug": "winnipeg"
  },
  {
    "name": "Barrie",
    "province": "ON",
    "slug": "barrie"
  },
  {
    "name": "Hamilton",
    "province": "ON",
    "slug": "hamilton"
  },
  {
    "name": "Oakville",
    "province": "ON",
    "slug": "oakville"
  },
  {
    "name": "Abbotsford",
    "province": "BC",
    "slug": "abbotsford"
  },
  {
    "name": "Kelowna",
    "province": "BC",
    "slug": "kelowna"
  },
  {
    "name": "London",
    "province": "ON",
    "slug": "london"
  },
  {
    "name": "Brampton",
    "province": "ON",
    "slug": "brampton"
  },
  {
    "name": "Kitchener",
    "province": "ON",
    "slug": "kitchener"
  },
  {
    "name": "Victoria",
    "province": "BC",
    "slug": "victoria"
  },
  {
    "name": "Saskatoon",
    "province": "SK",
    "slug": "saskatoon"
  },
  {
    "name": "Halifax",
    "province": "NS",
    "slug": "halifax"
  },
  {
    "name": "Burnaby",
    "province": "BC",
    "slug": "burnaby"
  },
  {
    "name": "Calgary",
    "province": "ON",
    "slug": "calgary"
  },
  {
    "name": "Aurora",
    "province": "ON",
    "slug": "aurora"
  },
  {
    "name": "Burlington",
    "province": "ON",
    "slug": "burlington"
  },
  {
    "name": "Oshawa",
    "province": "ON",
    "slug": "oshawa"
  },
  {
    "name": "Vaughan",
    "province": "ON",
    "slug": "vaughan"
  },
  {
    "name": "Richmond Hill",
    "province": "ON",
    "slug": "richmond-hill"
  },
  {
    "name": "Waterloo",
    "province": "ON",
    "slug": "waterloo"
  },
  {
    "name": "Windsor",
    "province": "ON",
    "slug": "windsor"
  },
  {
    "name": "Scarborough",
    "province": "ON",
    "slug": "scarborough"
  },
  {
    "name": "Sudbury",
    "province": "ON",
    "slug": "sudbury"
  },
  {
    "name": "Newmarket",
    "province": "ON",
    "slug": "newmarket"
  },
  {
    "name": "Markham",
    "province": "ON",
    "slug": "markham"
  },
  {
    "name": "Whitby",
    "province": "ON",
    "slug": "whitby"
  },
  {
    "name": "Guelph",
    "province": "ON",
    "slug": "guelph"
  },
  {
    "name": "Etobicoke",
    "province": "ON",
    "slug": "etobicoke"
  },
  {
    "name": "St. Catharines",
    "province": "ON",
    "slug": "st-catharines"
  },
  {
    "name": "Kingston",
    "province": "ON",
    "slug": "kingston"
  },
  {
    "name": "Pickering",
    "province": "ON",
    "slug": "pickering"
  },
  {
    "name": "Cambridge",
    "province": "ON",
    "slug": "cambridge"
  },
  {
    "name": "Ajax",
    "province": "ON",
    "slug": "ajax"
  },
  {
    "name": "Peterborough",
    "province": "ON",
    "slug": "peterborough"
  },
  {
    "name": "Thunder Bay",
    "province": "ON",
    "slug": "thunder-bay"
  },
  {
    "name": "North York",
    "province": "ON",
    "slug": "north-york"
  },
  {
    "name": "Niagara Falls",
    "province": "ON",
    "slug": "niagara-falls"
  },
  {
    "name": "Brantford",
    "province": "ON",
    "slug": "brantford"
  }
] as const satisfies ElectricianCity[];

export const ELECTRICIAN_PAGES = [
  {
    "id": 1,
    "title": "Electrician Near Me \u2013 Find a Local Pro",
    "slug": "electrician-near-me",
    "primaryKeyword": "electrician near me",
    "secondaryKeywords": [
      "local electrician near me",
      "hire electrician near me",
      "certified electrician near me"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Location Hub",
    "searchIntent": "Commercial / Transactional",
    "volume": 5800,
    "keywordDifficulty": 4,
    "cpc": 200,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 2,
    "title": "Electrician in Edmonton | Licensed & Local",
    "slug": "electrician-edmonton",
    "primaryKeyword": "electrician edmonton",
    "secondaryKeywords": [
      "edmonton electrician",
      "licensed electrician edmonton",
      "emergency electrician edmonton"
    ],
    "targetArea": "Edmonton, AB",
    "city": "Edmonton",
    "province": "AB",
    "citySlug": "edmonton",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 1000,
    "keywordDifficulty": 13,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 3,
    "title": "Electrician in Calgary | Certified Electrical Pros",
    "slug": "electrician-calgary",
    "primaryKeyword": "electrician calgary",
    "secondaryKeywords": [
      "calgary electrician",
      "licensed electrician calgary",
      "residential electrician calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 1000,
    "keywordDifficulty": 12,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 4,
    "title": "Electrician in Toronto | Fast & Reliable",
    "slug": "electrician-toronto",
    "primaryKeyword": "electrician toronto",
    "secondaryKeywords": [
      "toronto electrician",
      "licensed electrician toronto",
      "home electrician toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 800,
    "keywordDifficulty": 14,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 5,
    "title": "Electrician in Vancouver | Residential & Commercial",
    "slug": "electrician-vancouver",
    "primaryKeyword": "electrician vancouver",
    "secondaryKeywords": [
      "vancouver electrician",
      "electrical services vancouver",
      "licensed electrician vancouver"
    ],
    "targetArea": "Vancouver, BC",
    "city": "Vancouver",
    "province": "BC",
    "citySlug": "vancouver",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 600,
    "keywordDifficulty": 31,
    "cpc": 600,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 6,
    "title": "Electrician in Ottawa | Trusted Local Service",
    "slug": "electrician-ottawa",
    "primaryKeyword": "electrician ottawa",
    "secondaryKeywords": [
      "ottawa electrician",
      "licensed electrician ottawa",
      "residential electrician ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 600,
    "keywordDifficulty": 28,
    "cpc": 200,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 7,
    "title": "Electrician in Mississauga | Licensed Pros",
    "slug": "electrician-mississauga",
    "primaryKeyword": "electrician mississauga",
    "secondaryKeywords": [
      "electrician in mississauga",
      "residential electrician mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 400,
    "keywordDifficulty": 3,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 8,
    "title": "Electrician in Winnipeg | Local & Certified",
    "slug": "electrician-winnipeg",
    "primaryKeyword": "electrician winnipeg",
    "secondaryKeywords": [
      "winnipeg electrician",
      "licensed electrician winnipeg"
    ],
    "targetArea": "Winnipeg, MB",
    "city": "Winnipeg",
    "province": "MB",
    "citySlug": "winnipeg",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 350,
    "keywordDifficulty": 13,
    "cpc": 170,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 9,
    "title": "Electrician in Barrie | Residential & Commercial",
    "slug": "electrician-barrie",
    "primaryKeyword": "electrician barrie",
    "secondaryKeywords": [
      "barrie electrician",
      "licensed electrician barrie"
    ],
    "targetArea": "Barrie, ON",
    "city": "Barrie",
    "province": "ON",
    "citySlug": "barrie",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 350,
    "keywordDifficulty": 11,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 10,
    "title": "Electrician in Hamilton | Certified Electrical Pros",
    "slug": "electrician-hamilton",
    "primaryKeyword": "electrician hamilton",
    "secondaryKeywords": [
      "electrician hamilton ontario",
      "hamilton electrician"
    ],
    "targetArea": "Hamilton, ON",
    "city": "Hamilton",
    "province": "ON",
    "citySlug": "hamilton",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 400,
    "keywordDifficulty": 7,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 11,
    "title": "Electrician in Oakville | Licensed & Local",
    "slug": "electrician-oakville",
    "primaryKeyword": "electrician oakville",
    "secondaryKeywords": [
      "oakville electricians",
      "licensed electrician oakville"
    ],
    "targetArea": "Oakville, ON",
    "city": "Oakville",
    "province": "ON",
    "citySlug": "oakville",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 300,
    "keywordDifficulty": 2,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 12,
    "title": "Electrician in Abbotsford | Trusted Local Service",
    "slug": "electrician-abbotsford",
    "primaryKeyword": "electrician abbotsford",
    "secondaryKeywords": [
      "abbotsford electrician",
      "licensed electrician abbotsford"
    ],
    "targetArea": "Abbotsford, BC",
    "city": "Abbotsford",
    "province": "BC",
    "citySlug": "abbotsford",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 350,
    "keywordDifficulty": 15,
    "cpc": 450,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 13,
    "title": "Electrician in Kelowna | Residential & Commercial",
    "slug": "electrician-kelowna",
    "primaryKeyword": "electrician kelowna",
    "secondaryKeywords": [
      "kelowna electrician",
      "licensed electrician kelowna"
    ],
    "targetArea": "Kelowna, BC",
    "city": "Kelowna",
    "province": "BC",
    "citySlug": "kelowna",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 250,
    "keywordDifficulty": 10,
    "cpc": 300,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 14,
    "title": "Electrician in London Ontario | Certified Pros",
    "slug": "electrician-london-ontario",
    "primaryKeyword": "electrician london ontario",
    "secondaryKeywords": [
      "london ontario electrician",
      "licensed electrician london on"
    ],
    "targetArea": "London, ON",
    "city": "London",
    "province": "ON",
    "citySlug": "london",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 250,
    "keywordDifficulty": 8,
    "cpc": 280,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 15,
    "title": "Electrician in Brampton | Licensed & Fast",
    "slug": "electrician-brampton",
    "primaryKeyword": "electrician brampton",
    "secondaryKeywords": [
      "brampton electrician",
      "residential electrician brampton"
    ],
    "targetArea": "Brampton, ON",
    "city": "Brampton",
    "province": "ON",
    "citySlug": "brampton",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 200,
    "keywordDifficulty": 6,
    "cpc": 270,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 16,
    "title": "Electrician in Kitchener | Trusted Local Pros",
    "slug": "electrician-kitchener",
    "primaryKeyword": "electrician kitchener",
    "secondaryKeywords": [
      "kitchener electrician",
      "waterloo electrician"
    ],
    "targetArea": "Kitchener, ON",
    "city": "Kitchener",
    "province": "ON",
    "citySlug": "kitchener",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 200,
    "keywordDifficulty": 5,
    "cpc": 260,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 17,
    "title": "Electrician in Victoria BC | Residential & Commercial",
    "slug": "electrician-victoria-bc",
    "primaryKeyword": "electrician victoria bc",
    "secondaryKeywords": [
      "victoria bc electrician",
      "licensed electrician victoria bc"
    ],
    "targetArea": "Victoria, BC",
    "city": "Victoria",
    "province": "BC",
    "citySlug": "victoria",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 200,
    "keywordDifficulty": 9,
    "cpc": 350,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 18,
    "title": "Electrician in Saskatoon | Local Certified Pros",
    "slug": "electrician-saskatoon",
    "primaryKeyword": "electrician saskatoon",
    "secondaryKeywords": [
      "saskatoon electrician",
      "licensed electrician saskatoon"
    ],
    "targetArea": "Saskatoon, SK",
    "city": "Saskatoon",
    "province": "SK",
    "citySlug": "saskatoon",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 200,
    "keywordDifficulty": 7,
    "cpc": 220,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 19,
    "title": "Electrician in Halifax | Fast & Reliable",
    "slug": "electrician-halifax",
    "primaryKeyword": "electrician halifax",
    "secondaryKeywords": [
      "halifax electrician",
      "licensed electrician halifax"
    ],
    "targetArea": "Halifax, NS",
    "city": "Halifax",
    "province": "NS",
    "citySlug": "halifax",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 5,
    "cpc": 200,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 20,
    "title": "Electrician in Burnaby | Trusted Local Service",
    "slug": "electrician-burnaby",
    "primaryKeyword": "electrician burnaby",
    "secondaryKeywords": [
      "burnaby electrician",
      "residential electrician burnaby"
    ],
    "targetArea": "Burnaby, BC",
    "city": "Burnaby",
    "province": "BC",
    "citySlug": "burnaby",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 7,
    "cpc": 400,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 21,
    "title": "EV Charger Installation in Calgary | Book Today",
    "slug": "ev-charger-installation-calgary",
    "primaryKeyword": "ev charger installation calgary",
    "secondaryKeywords": [
      "electric vehicle charger calgary",
      "home ev charger calgary",
      "level 2 charger installation calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 200,
    "keywordDifficulty": 0,
    "cpc": 450,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 22,
    "title": "EV Charger Installation in Edmonton | Certified",
    "slug": "ev-charger-installation-edmonton",
    "primaryKeyword": "ev charger installation edmonton",
    "secondaryKeywords": [
      "electric vehicle charger edmonton",
      "home ev charger edmonton"
    ],
    "targetArea": "Edmonton, AB",
    "city": "Edmonton",
    "province": "AB",
    "citySlug": "edmonton",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 23,
    "title": "EV Charger Installation in Vancouver | Book Today",
    "slug": "ev-charger-installation-vancouver",
    "primaryKeyword": "ev charger installation vancouver",
    "secondaryKeywords": [
      "ev charger installation near me",
      "electric car charger vancouver",
      "ev charger installation bc"
    ],
    "targetArea": "Vancouver, BC",
    "city": "Vancouver",
    "province": "BC",
    "citySlug": "vancouver",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 200,
    "keywordDifficulty": 0,
    "cpc": 180,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 24,
    "title": "EV Charger Installation in Toronto | Certified Pros",
    "slug": "ev-charger-installation-toronto",
    "primaryKeyword": "ev charger installation toronto",
    "secondaryKeywords": [
      "home ev charger toronto",
      "level 2 charger toronto",
      "ev charger installation near me"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 2,
    "cpc": 200,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 25,
    "title": "EV Charger Installation Near Me | Licensed Electricians",
    "slug": "ev-charger-installation-near-me",
    "primaryKeyword": "ev charger installation near me",
    "secondaryKeywords": [
      "ev charger installation",
      "electric vehicle charger installation",
      "home ev charger install"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Transactional",
    "volume": 600,
    "keywordDifficulty": 2,
    "cpc": 200,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 26,
    "title": "Electrical Panel Upgrade in Calgary | Licensed Pros",
    "slug": "electrical-panel-upgrade-calgary",
    "primaryKeyword": "electrical panel upgrade calgary",
    "secondaryKeywords": [
      "panel upgrade calgary",
      "200 amp panel upgrade calgary",
      "electrical panel replacement calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 200,
    "keywordDifficulty": 0,
    "cpc": 450,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 27,
    "title": "Electrical Panel Upgrade in Edmonton | Fast Service",
    "slug": "electrical-panel-upgrade-edmonton",
    "primaryKeyword": "electrical panel upgrade edmonton",
    "secondaryKeywords": [
      "panel upgrade edmonton",
      "electrical panel replacement edmonton"
    ],
    "targetArea": "Edmonton, AB",
    "city": "Edmonton",
    "province": "AB",
    "citySlug": "edmonton",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 400,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 28,
    "title": "Electrical Panel Upgrade in Toronto | Certified",
    "slug": "electrical-panel-upgrade-toronto",
    "primaryKeyword": "electrical panel upgrade toronto",
    "secondaryKeywords": [
      "panel upgrade toronto",
      "200 amp upgrade toronto",
      "electrical panel replacement toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 2,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 29,
    "title": "Electrical Panel Upgrade in Vancouver | Licensed",
    "slug": "electrical-panel-upgrade-vancouver",
    "primaryKeyword": "electrical panel upgrade vancouver",
    "secondaryKeywords": [
      "panel upgrade vancouver",
      "200 amp upgrade vancouver",
      "electrical panel replacement vancouver"
    ],
    "targetArea": "Vancouver, BC",
    "city": "Vancouver",
    "province": "BC",
    "citySlug": "vancouver",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 1,
    "cpc": 500,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 30,
    "title": "Generator Installation in Calgary | Home & Business",
    "slug": "generator-installation-calgary",
    "primaryKeyword": "generator installation calgary",
    "secondaryKeywords": [
      "home generator calgary",
      "backup generator installation calgary",
      "standby generator calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 31,
    "title": "Generator Installation in Edmonton | Fast & Reliable",
    "slug": "generator-installation-edmonton",
    "primaryKeyword": "generator installation edmonton",
    "secondaryKeywords": [
      "home generator edmonton",
      "backup generator edmonton",
      "standby generator install edmonton"
    ],
    "targetArea": "Edmonton, AB",
    "city": "Edmonton",
    "province": "AB",
    "citySlug": "edmonton",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 32,
    "title": "Generator Installation in Ottawa | Certified Pros",
    "slug": "generator-installation-ottawa",
    "primaryKeyword": "generator installation ottawa",
    "secondaryKeywords": [
      "home generator ottawa",
      "backup generator ottawa",
      "generator installation near me"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 33,
    "title": "Generator Installation Near Me | Licensed Electricians",
    "slug": "generator-installation-near-me",
    "primaryKeyword": "generator installation near me",
    "secondaryKeywords": [
      "generator installation",
      "home generator installation",
      "backup generator installation"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Transactional",
    "volume": 400,
    "keywordDifficulty": 1,
    "cpc": 90,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 34,
    "title": "Electrical Repair in Calgary | Fast Response",
    "slug": "electrical-repair-calgary",
    "primaryKeyword": "electrical repair calgary",
    "secondaryKeywords": [
      "home electrical repair calgary",
      "electrical services calgary",
      "emergency electrical calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 200,
    "keywordDifficulty": 12,
    "cpc": 500,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 35,
    "title": "Electrical Repair in Edmonton | Licensed Electricians",
    "slug": "electrical-repair-edmonton",
    "primaryKeyword": "electrical repair edmonton",
    "secondaryKeywords": [
      "home electrical repair edmonton",
      "electrical services edmonton"
    ],
    "targetArea": "Edmonton, AB",
    "city": "Edmonton",
    "province": "AB",
    "citySlug": "edmonton",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 5,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrical-repair",
    "serviceName": "Electrical Repair"
  },
  {
    "id": 36,
    "title": "Electrical Repair in Toronto | Same-Day Service",
    "slug": "electrical-repair-toronto",
    "primaryKeyword": "electrical repair toronto",
    "secondaryKeywords": [
      "home electrical repair toronto",
      "electrical services toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 5,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrical-repair",
    "serviceName": "Electrical Repair"
  },
  {
    "id": 37,
    "title": "Electrical Repair Near Me | Licensed & Fast",
    "slug": "electrical-repair-near-me",
    "primaryKeyword": "electrical repair near me",
    "secondaryKeywords": [
      "home electrical repair",
      "electrical repair",
      "electrical services near me"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Transactional",
    "volume": 700,
    "keywordDifficulty": 0,
    "cpc": 200,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrical-repair",
    "serviceName": "Electrical Repair"
  },
  {
    "id": 38,
    "title": "Pot Light Installation in Toronto | Book Today",
    "slug": "pot-light-installation-toronto",
    "primaryKeyword": "pot light installation toronto",
    "secondaryKeywords": [
      "potlight installation toronto",
      "recessed lighting toronto",
      "pot lights cost toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 130,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 39,
    "title": "Pot Light Installation in Calgary | Certified Pros",
    "slug": "pot-light-installation-calgary",
    "primaryKeyword": "pot light installation calgary",
    "secondaryKeywords": [
      "potlight installation calgary",
      "recessed lighting calgary",
      "pot lights cost calgary"
    ],
    "targetArea": "Calgary, ON",
    "city": "Calgary",
    "province": "ON",
    "citySlug": "calgary",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 130,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 40,
    "title": "Ceiling Fan Installation in Toronto | Fast Service",
    "slug": "ceiling-fan-installation-toronto",
    "primaryKeyword": "ceiling fan installation toronto",
    "secondaryKeywords": [
      "ceiling fan install toronto",
      "ceiling fan wiring toronto",
      "fan installation cost toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 80,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 41,
    "title": "Ceiling Fan Installation in Calgary | Licensed Pros",
    "slug": "ceiling-fan-installation-calgary",
    "primaryKeyword": "ceiling fan installation calgary",
    "secondaryKeywords": [
      "ceiling fan install calgary",
      "fan wiring calgary",
      "ceiling fan cost calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 75,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 42,
    "title": "EV Charger Installation | Certified Canadian Electricians",
    "slug": "ev-charger-installation",
    "primaryKeyword": "ev charger installation",
    "secondaryKeywords": [
      "electric vehicle charger installation",
      "level 2 charger install",
      "home ev charger",
      "ev charging station install"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Informational / Commercial",
    "volume": 1300,
    "keywordDifficulty": 2,
    "cpc": 180,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 43,
    "title": "Electrical Repair Services | Licensed Electricians",
    "slug": "electrical-repair",
    "primaryKeyword": "electrical repair",
    "secondaryKeywords": [
      "home electrical repair",
      "electrical repair near me",
      "electrical services near me"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 1400,
    "keywordDifficulty": 2,
    "cpc": 120,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrical-repair",
    "serviceName": "Electrical Repair"
  },
  {
    "id": 44,
    "title": "Electrical Panel Upgrade | 200 Amp Service Upgrades",
    "slug": "electrical-panel-upgrade",
    "primaryKeyword": "electrical panel upgrade",
    "secondaryKeywords": [
      "panel upgrade",
      "upgrade electrical panel",
      "200 amp electrical panel",
      "electric panel upgrade"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 900,
    "keywordDifficulty": 8,
    "cpc": 130,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 45,
    "title": "Generator Installation | Home & Commercial",
    "slug": "generator-installation",
    "primaryKeyword": "generator installation",
    "secondaryKeywords": [
      "home generator installation",
      "backup generator installation",
      "emergency generator install"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 700,
    "keywordDifficulty": 2,
    "cpc": 190,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 46,
    "title": "Residential Electrician | Home Electrical Services",
    "slug": "residential-electrician",
    "primaryKeyword": "residential electrician",
    "secondaryKeywords": [
      "residential electrician near me",
      "home electrician",
      "residential electrical services"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 800,
    "keywordDifficulty": 1,
    "cpc": 170,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 47,
    "title": "Commercial Electrician | Business Electrical Services",
    "slug": "commercial-electrician",
    "primaryKeyword": "commercial electrician",
    "secondaryKeywords": [
      "commercial electrical services",
      "commercial electrical contractor"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 1300,
    "keywordDifficulty": 0,
    "cpc": 8,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 48,
    "title": "Pot Light Installation | Recessed Lighting Experts",
    "slug": "pot-light-installation",
    "primaryKeyword": "pot light installation",
    "secondaryKeywords": [
      "potlight installation",
      "recessed lighting installation",
      "pot lights installation cost"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 400,
    "keywordDifficulty": 0,
    "cpc": 80,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 49,
    "title": "Electrical Panel Replacement | Upgrade Your Panel",
    "slug": "electrical-panel-replacement",
    "primaryKeyword": "electrical panel replacement",
    "secondaryKeywords": [
      "electrical panel upgrade",
      "replace electrical panel",
      "panel upgrade cost"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 200,
    "keywordDifficulty": 0,
    "cpc": 80,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 50,
    "title": "Electrical Inspection | Certified Electricians",
    "slug": "electrical-inspection",
    "primaryKeyword": "electrical inspection",
    "secondaryKeywords": [
      "home electrical inspection",
      "electrical safety inspection",
      "electrical inspection cost"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Informational / Commercial",
    "volume": 400,
    "keywordDifficulty": 1,
    "cpc": 200,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 51,
    "title": "Ceiling Fan Installation | Certified Canadian Electricians",
    "slug": "ceiling-fan-installation",
    "primaryKeyword": "ceiling fan installation",
    "secondaryKeywords": [
      "ceiling fan installation near me",
      "ceiling fan install cost",
      "ceiling fan wiring"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 500,
    "keywordDifficulty": 13,
    "cpc": 25,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 52,
    "title": "Smoke Detector Installation | Safety First",
    "slug": "smoke-detector-installation",
    "primaryKeyword": "smoke detector installation",
    "secondaryKeywords": [
      "smoke detector install",
      "smoke alarm installation",
      "carbon monoxide detector install"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 150,
    "keywordDifficulty": 1,
    "cpc": 120,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 53,
    "title": "Home Rewiring Services | Full House Rewiring",
    "slug": "home-rewiring",
    "primaryKeyword": "home rewiring",
    "secondaryKeywords": [
      "house rewiring cost",
      "electrical rewiring",
      "rewiring a house canada"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 160,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 54,
    "title": "Electrical Outlet Installation | Add or Replace Outlets",
    "slug": "electrical-outlet-installation",
    "primaryKeyword": "electrical outlet installation",
    "secondaryKeywords": [
      "add outlet to room",
      "electrical outlet near me",
      "outlet installation cost"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 150,
    "keywordDifficulty": 1,
    "cpc": 130,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 55,
    "title": "Hot Tub Electrical Installation | Licensed Electricians",
    "slug": "hot-tub-electrical-installation",
    "primaryKeyword": "hot tub electrical installation",
    "secondaryKeywords": [
      "hot tub wiring",
      "hot tub electrical hookup",
      "spa electrical installation"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Service Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 25,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 56,
    "title": "Emergency Electrician Near Me | 24/7 Service",
    "slug": "emergency-electrician-near-me",
    "primaryKeyword": "emergency electrician near me",
    "secondaryKeywords": [
      "emergency electrician",
      "24 hour electrician near me",
      "emergency electrical services"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Modifier Hub",
    "searchIntent": "Transactional / Urgent",
    "volume": 500,
    "keywordDifficulty": 0,
    "cpc": 180,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 57,
    "title": "Emergency Electrician in Calgary | Available Now",
    "slug": "emergency-electrician-calgary",
    "primaryKeyword": "emergency electrician calgary",
    "secondaryKeywords": [
      "24/7 electrician calgary",
      "after hours electrician calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 58,
    "title": "Emergency Electrician in Edmonton | Available Now",
    "slug": "emergency-electrician-edmonton",
    "primaryKeyword": "emergency electrician edmonton",
    "secondaryKeywords": [
      "24/7 electrician edmonton",
      "after hours electrician edmonton"
    ],
    "targetArea": "Edmonton, AB",
    "city": "Edmonton",
    "province": "AB",
    "citySlug": "edmonton",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 120,
    "keywordDifficulty": 0,
    "cpc": 230,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 59,
    "title": "Emergency Electrician in Toronto | 24/7 Available",
    "slug": "emergency-electrician-toronto",
    "primaryKeyword": "emergency electrician toronto",
    "secondaryKeywords": [
      "24/7 electrician toronto",
      "after hours electrician toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 60,
    "title": "Emergency Electrician in Vancouver | 24/7 Service",
    "slug": "emergency-electrician-vancouver",
    "primaryKeyword": "emergency electrician vancouver",
    "secondaryKeywords": [
      "24/7 electrician vancouver",
      "after hours electrician vancouver"
    ],
    "targetArea": "Vancouver, BC",
    "city": "Vancouver",
    "province": "BC",
    "citySlug": "vancouver",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 400,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 61,
    "title": "Licensed Electrician Near Me | Certified & Insured",
    "slug": "licensed-electrician-near-me",
    "primaryKeyword": "licensed electrician near me",
    "secondaryKeywords": [
      "certified electrician near me",
      "licensed electrician",
      "insured electrician near me"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Modifier Hub",
    "searchIntent": "Commercial / Transactional",
    "volume": 600,
    "keywordDifficulty": 8,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 62,
    "title": "Licensed Electrician in Calgary | Certified & Insured",
    "slug": "licensed-electrician-calgary",
    "primaryKeyword": "licensed electrician calgary",
    "secondaryKeywords": [
      "certified electrician calgary",
      "master electrician calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 3,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 63,
    "title": "Licensed Electrician in Toronto | Certified & Insured",
    "slug": "licensed-electrician-toronto",
    "primaryKeyword": "licensed electrician toronto",
    "secondaryKeywords": [
      "certified electrician toronto",
      "master electrician toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 5,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 64,
    "title": "Residential Electrician Near Me | Home Electrical Experts",
    "slug": "residential-electrician-near-me",
    "primaryKeyword": "residential electrician near me",
    "secondaryKeywords": [
      "residential electrician",
      "home electrician near me",
      "residential electrical contractor"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Modifier Hub",
    "searchIntent": "Commercial / Transactional",
    "volume": 500,
    "keywordDifficulty": 0,
    "cpc": 190,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 65,
    "title": "Residential Electrician in Calgary | Home Electrical",
    "slug": "residential-electrician-calgary",
    "primaryKeyword": "residential electrician calgary",
    "secondaryKeywords": [
      "home electrician calgary",
      "residential electrical services calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 66,
    "title": "Residential Electrician in Toronto | Home Electrical",
    "slug": "residential-electrician-toronto",
    "primaryKeyword": "residential electrician toronto",
    "secondaryKeywords": [
      "home electrician toronto",
      "residential electrical services toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 2,
    "cpc": 270,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 67,
    "title": "Commercial Electrical Contractor | Business Services",
    "slug": "commercial-electrical-contractor",
    "primaryKeyword": "commercial electrical contractor",
    "secondaryKeywords": [
      "commercial electrician",
      "commercial electrical services",
      "industrial electrical contractor"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Modifier Hub",
    "searchIntent": "Commercial / Informational",
    "volume": 500,
    "keywordDifficulty": 0,
    "cpc": 200,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 68,
    "title": "Commercial Electrician in Calgary | Business Electrical",
    "slug": "commercial-electrician-calgary",
    "primaryKeyword": "commercial electrician calgary",
    "secondaryKeywords": [
      "commercial electrical services calgary",
      "business electrician calgary"
    ],
    "targetArea": "Calgary, AB",
    "city": "Calgary",
    "province": "AB",
    "citySlug": "calgary",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 69,
    "title": "Commercial Electrician in Toronto | Business Electrical",
    "slug": "commercial-electrician-toronto",
    "primaryKeyword": "commercial electrician toronto",
    "secondaryKeywords": [
      "commercial electrical services toronto",
      "business electrician toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 2,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 70,
    "title": "Electrical Contractor Near Me | Licensed & Certified",
    "slug": "electrical-contractor-near-me",
    "primaryKeyword": "electrical contractor near me",
    "secondaryKeywords": [
      "electrical contractors near me",
      "electrical contractor",
      "electrical companies near me"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Modifier Hub",
    "searchIntent": "Commercial / Transactional",
    "volume": 200,
    "keywordDifficulty": 17,
    "cpc": 200,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 71,
    "title": "Electrical Services Near Me | Full-Service Electricians",
    "slug": "electrical-services-near-me",
    "primaryKeyword": "electrical services near me",
    "secondaryKeywords": [
      "electrical services",
      "home electrical services",
      "residential electrical services"
    ],
    "targetArea": "Canada (All)",
    "city": "Canada",
    "province": "National",
    "citySlug": "canada",
    "pageType": "Modifier Hub",
    "searchIntent": "Commercial / Local",
    "volume": 400,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 72,
    "title": "Electrician in Aurora | Licensed & Local",
    "slug": "electrician-aurora",
    "primaryKeyword": "electrician aurora",
    "secondaryKeywords": [
      "aurora electrician",
      "licensed electrician aurora",
      "residential electrician aurora"
    ],
    "targetArea": "Aurora, ON",
    "city": "Aurora",
    "province": "ON",
    "citySlug": "aurora",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 300,
    "keywordDifficulty": 0,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 73,
    "title": "Electrician in Burlington | Certified Electrical Pros",
    "slug": "electrician-burlington",
    "primaryKeyword": "electrician burlington",
    "secondaryKeywords": [
      "burlington electrician",
      "licensed electrician burlington",
      "residential electrician burlington"
    ],
    "targetArea": "Burlington, ON",
    "city": "Burlington",
    "province": "ON",
    "citySlug": "burlington",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 250,
    "keywordDifficulty": 0,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 74,
    "title": "Electrician in Oshawa | Fast & Reliable",
    "slug": "electrician-oshawa",
    "primaryKeyword": "electrician oshawa",
    "secondaryKeywords": [
      "oshawa electrician",
      "licensed electrician oshawa",
      "residential electrician oshawa"
    ],
    "targetArea": "Oshawa, ON",
    "city": "Oshawa",
    "province": "ON",
    "citySlug": "oshawa",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 250,
    "keywordDifficulty": 4,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 75,
    "title": "Electrician in London Ontario | Trusted Local Pros",
    "slug": "electrician-london-on",
    "primaryKeyword": "electrician london ontario",
    "secondaryKeywords": [
      "london ontario electrician",
      "licensed electrician london on",
      "residential electrician london ontario"
    ],
    "targetArea": "London, ON",
    "city": "London",
    "province": "ON",
    "citySlug": "london",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 250,
    "keywordDifficulty": 12,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 76,
    "title": "Electrician in Vaughan | Licensed & Certified",
    "slug": "electrician-vaughan",
    "primaryKeyword": "electrician vaughan",
    "secondaryKeywords": [
      "vaughan electrician",
      "licensed electrician vaughan",
      "commercial electrician vaughan"
    ],
    "targetArea": "Vaughan, ON",
    "city": "Vaughan",
    "province": "ON",
    "citySlug": "vaughan",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 250,
    "keywordDifficulty": 7,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 77,
    "title": "Electrician in Richmond Hill | Residential & Commercial",
    "slug": "electrician-richmond-hill",
    "primaryKeyword": "electrician richmond hill",
    "secondaryKeywords": [
      "richmond hill electrician",
      "licensed electrician richmond hill",
      "commercial electrician richmond hill"
    ],
    "targetArea": "Richmond Hill, ON",
    "city": "Richmond Hill",
    "province": "ON",
    "citySlug": "richmond-hill",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 200,
    "keywordDifficulty": 5,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 78,
    "title": "Electrician in Waterloo | Certified Electrical Pros",
    "slug": "electrician-waterloo",
    "primaryKeyword": "electrician waterloo",
    "secondaryKeywords": [
      "waterloo electrician",
      "licensed electrician waterloo",
      "kitchener waterloo electrician"
    ],
    "targetArea": "Waterloo, ON",
    "city": "Waterloo",
    "province": "ON",
    "citySlug": "waterloo",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 200,
    "keywordDifficulty": 4,
    "cpc": 260,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 79,
    "title": "Electrician in Windsor | Licensed & Local",
    "slug": "electrician-windsor",
    "primaryKeyword": "electrician windsor",
    "secondaryKeywords": [
      "windsor electrician",
      "licensed electrician windsor",
      "residential electrician windsor"
    ],
    "targetArea": "Windsor, ON",
    "city": "Windsor",
    "province": "ON",
    "citySlug": "windsor",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 200,
    "keywordDifficulty": 9,
    "cpc": 170,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 80,
    "title": "Electrician in Scarborough | Fast & Reliable",
    "slug": "electrician-scarborough",
    "primaryKeyword": "electrician scarborough",
    "secondaryKeywords": [
      "scarborough electrician",
      "licensed electrician scarborough",
      "emergency electrician scarborough"
    ],
    "targetArea": "Scarborough, ON",
    "city": "Scarborough",
    "province": "ON",
    "citySlug": "scarborough",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 200,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 81,
    "title": "Electrician in Sudbury | Certified Local Pros",
    "slug": "electrician-sudbury",
    "primaryKeyword": "electrician sudbury",
    "secondaryKeywords": [
      "sudbury electrician",
      "licensed electrician sudbury ontario"
    ],
    "targetArea": "Sudbury, ON",
    "city": "Sudbury",
    "province": "ON",
    "citySlug": "sudbury",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 1,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 82,
    "title": "Electrician in Newmarket | Licensed & Insured",
    "slug": "electrician-newmarket",
    "primaryKeyword": "electrician newmarket",
    "secondaryKeywords": [
      "newmarket electrician",
      "licensed electrician newmarket",
      "residential electrician newmarket"
    ],
    "targetArea": "Newmarket, ON",
    "city": "Newmarket",
    "province": "ON",
    "citySlug": "newmarket",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 7,
    "cpc": 400,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 83,
    "title": "Electrician in Markham | Residential & Commercial",
    "slug": "electrician-markham",
    "primaryKeyword": "electrician markham",
    "secondaryKeywords": [
      "markham electrician",
      "licensed electrician markham",
      "commercial electrician markham"
    ],
    "targetArea": "Markham, ON",
    "city": "Markham",
    "province": "ON",
    "citySlug": "markham",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 84,
    "title": "Electrician in Whitby | Trusted Local Service",
    "slug": "electrician-whitby",
    "primaryKeyword": "electrician whitby",
    "secondaryKeywords": [
      "whitby electrician",
      "licensed electrician whitby",
      "residential electrician whitby"
    ],
    "targetArea": "Whitby, ON",
    "city": "Whitby",
    "province": "ON",
    "citySlug": "whitby",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 6,
    "cpc": 400,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 85,
    "title": "Electrician in Guelph | Licensed Electrical Pros",
    "slug": "electrician-guelph",
    "primaryKeyword": "electrician guelph",
    "secondaryKeywords": [
      "guelph electrician",
      "licensed electrician guelph",
      "residential electrician guelph"
    ],
    "targetArea": "Guelph, ON",
    "city": "Guelph",
    "province": "ON",
    "citySlug": "guelph",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 2,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 86,
    "title": "Electrician in Etobicoke | Certified & Insured",
    "slug": "electrician-etobicoke",
    "primaryKeyword": "electrician etobicoke",
    "secondaryKeywords": [
      "etobicoke electrician",
      "licensed electrician etobicoke",
      "commercial electrician etobicoke"
    ],
    "targetArea": "Etobicoke, ON",
    "city": "Etobicoke",
    "province": "ON",
    "citySlug": "etobicoke",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 87,
    "title": "Electrician in St. Catharines | Trusted Local Pros",
    "slug": "electrician-st-catharines",
    "primaryKeyword": "electrician st catharines",
    "secondaryKeywords": [
      "st catharines electrician",
      "licensed electrician st catharines",
      "niagara electrician"
    ],
    "targetArea": "St. Catharines, ON",
    "city": "St. Catharines",
    "province": "ON",
    "citySlug": "st-catharines",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 9,
    "cpc": 250,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 88,
    "title": "Electrician in Kingston | Licensed & Reliable",
    "slug": "electrician-kingston",
    "primaryKeyword": "electrician kingston",
    "secondaryKeywords": [
      "kingston electrician",
      "licensed electrician kingston ontario"
    ],
    "targetArea": "Kingston, ON",
    "city": "Kingston",
    "province": "ON",
    "citySlug": "kingston",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 22,
    "cpc": 250,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 89,
    "title": "Electrician in Pickering | Fast & Certified",
    "slug": "electrician-pickering",
    "primaryKeyword": "electrician pickering",
    "secondaryKeywords": [
      "pickering electrician",
      "licensed electrician pickering",
      "residential electrician pickering"
    ],
    "targetArea": "Pickering, ON",
    "city": "Pickering",
    "province": "ON",
    "citySlug": "pickering",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 90,
    "title": "Electrician in Cambridge | Licensed & Local",
    "slug": "electrician-cambridge",
    "primaryKeyword": "electrician cambridge",
    "secondaryKeywords": [
      "cambridge electrician",
      "licensed electrician cambridge ontario"
    ],
    "targetArea": "Cambridge, ON",
    "city": "Cambridge",
    "province": "ON",
    "citySlug": "cambridge",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 100,
    "keywordDifficulty": 4,
    "cpc": 250,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 91,
    "title": "Electrician in Ajax | Certified Electrical Pros",
    "slug": "electrician-ajax",
    "primaryKeyword": "electrician ajax",
    "secondaryKeywords": [
      "ajax electrician",
      "licensed electrician ajax",
      "residential electrician ajax"
    ],
    "targetArea": "Ajax, ON",
    "city": "Ajax",
    "province": "ON",
    "citySlug": "ajax",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 350,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 92,
    "title": "Electrician in Peterborough | Trusted Local Service",
    "slug": "electrician-peterborough",
    "primaryKeyword": "electrician peterborough",
    "secondaryKeywords": [
      "peterborough electrician",
      "licensed electrician peterborough"
    ],
    "targetArea": "Peterborough, ON",
    "city": "Peterborough",
    "province": "ON",
    "citySlug": "peterborough",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 100,
    "keywordDifficulty": 9,
    "cpc": 200,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 93,
    "title": "Electrician in Thunder Bay | Licensed & Local",
    "slug": "electrician-thunder-bay",
    "primaryKeyword": "electrician thunder bay",
    "secondaryKeywords": [
      "thunder bay electrician",
      "licensed electrician thunder bay"
    ],
    "targetArea": "Thunder Bay, ON",
    "city": "Thunder Bay",
    "province": "ON",
    "citySlug": "thunder-bay",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 100,
    "keywordDifficulty": 8,
    "cpc": 120,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 94,
    "title": "Electrician in North York | Fast & Reliable",
    "slug": "electrician-north-york",
    "primaryKeyword": "electrician north york",
    "secondaryKeywords": [
      "north york electrician",
      "residential electrician north york",
      "licensed electrician north york"
    ],
    "targetArea": "North York, ON",
    "city": "North York",
    "province": "ON",
    "citySlug": "north-york",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 400,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 95,
    "title": "Electrician in Niagara Falls | Certified Pros",
    "slug": "electrician-niagara-falls",
    "primaryKeyword": "electrician niagara falls",
    "secondaryKeywords": [
      "niagara falls electrician",
      "licensed electrician niagara falls"
    ],
    "targetArea": "Niagara Falls, ON",
    "city": "Niagara Falls",
    "province": "ON",
    "citySlug": "niagara-falls",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 80,
    "keywordDifficulty": 8,
    "cpc": 150,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 96,
    "title": "Electrician in Brantford | Licensed & Insured",
    "slug": "electrician-brantford",
    "primaryKeyword": "electrician brantford",
    "secondaryKeywords": [
      "brantford electrician",
      "licensed electrician brantford"
    ],
    "targetArea": "Brantford, ON",
    "city": "Brantford",
    "province": "ON",
    "citySlug": "brantford",
    "pageType": "City Landing Page",
    "searchIntent": "Commercial / Local",
    "volume": 80,
    "keywordDifficulty": 3,
    "cpc": 400,
    "priority": "Medium",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 97,
    "title": "EV Charger Installation in Mississauga | Certified",
    "slug": "ev-charger-installation-mississauga",
    "primaryKeyword": "ev charger installation mississauga",
    "secondaryKeywords": [
      "electric vehicle charger mississauga",
      "home ev charger mississauga",
      "level 2 charger mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 98,
    "title": "EV Charger Installation in Ottawa | Book Today",
    "slug": "ev-charger-installation-ottawa",
    "primaryKeyword": "ev charger installation ottawa",
    "secondaryKeywords": [
      "electric vehicle charger ottawa",
      "home ev charger ottawa",
      "level 2 charger ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 220,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 99,
    "title": "EV Charger Installation in Hamilton | Licensed",
    "slug": "ev-charger-installation-hamilton",
    "primaryKeyword": "ev charger installation hamilton",
    "secondaryKeywords": [
      "electric vehicle charger hamilton",
      "home ev charger hamilton"
    ],
    "targetArea": "Hamilton, ON",
    "city": "Hamilton",
    "province": "ON",
    "citySlug": "hamilton",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 60,
    "keywordDifficulty": 0,
    "cpc": 230,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 100,
    "title": "Electrical Panel Upgrade in Ottawa | Certified Pros",
    "slug": "electrical-panel-upgrade-ottawa",
    "primaryKeyword": "electrical panel upgrade ottawa",
    "secondaryKeywords": [
      "panel upgrade ottawa",
      "200 amp upgrade ottawa",
      "electrical panel replacement ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 101,
    "title": "Electrical Panel Upgrade in Mississauga | Fast Service",
    "slug": "electrical-panel-upgrade-mississauga",
    "primaryKeyword": "electrical panel upgrade mississauga",
    "secondaryKeywords": [
      "panel upgrade mississauga",
      "200 amp upgrade mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 320,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 102,
    "title": "Electrical Panel Upgrade in Hamilton | Licensed",
    "slug": "electrical-panel-upgrade-hamilton",
    "primaryKeyword": "electrical panel upgrade hamilton",
    "secondaryKeywords": [
      "panel upgrade hamilton",
      "200 amp upgrade hamilton"
    ],
    "targetArea": "Hamilton, ON",
    "city": "Hamilton",
    "province": "ON",
    "citySlug": "hamilton",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 60,
    "keywordDifficulty": 0,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 103,
    "title": "Generator Installation in Toronto | Home & Business",
    "slug": "generator-installation-toronto",
    "primaryKeyword": "generator installation toronto",
    "secondaryKeywords": [
      "home generator toronto",
      "backup generator toronto",
      "standby generator toronto"
    ],
    "targetArea": "Toronto, ON",
    "city": "Toronto",
    "province": "ON",
    "citySlug": "toronto",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 0,
    "cpc": 220,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 104,
    "title": "Generator Installation in Mississauga | Certified",
    "slug": "generator-installation-mississauga",
    "primaryKeyword": "generator installation mississauga",
    "secondaryKeywords": [
      "home generator mississauga",
      "backup generator mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 70,
    "keywordDifficulty": 0,
    "cpc": 200,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 105,
    "title": "Pot Light Installation in Mississauga | Book Today",
    "slug": "pot-light-installation-mississauga",
    "primaryKeyword": "pot light installation mississauga",
    "secondaryKeywords": [
      "potlight installation mississauga",
      "recessed lighting mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 130,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 106,
    "title": "Pot Light Installation in Ottawa | Licensed Pros",
    "slug": "pot-light-installation-ottawa",
    "primaryKeyword": "pot light installation ottawa",
    "secondaryKeywords": [
      "potlight installation ottawa",
      "recessed lighting ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 70,
    "keywordDifficulty": 0,
    "cpc": 130,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 107,
    "title": "Electrical Repair in Ottawa | Same-Day Service",
    "slug": "electrical-repair-ottawa",
    "primaryKeyword": "electrical repair ottawa",
    "secondaryKeywords": [
      "home electrical repair ottawa",
      "electrical services ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 100,
    "keywordDifficulty": 5,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrical-repair",
    "serviceName": "Electrical Repair"
  },
  {
    "id": 108,
    "title": "Electrical Repair in Mississauga | Licensed Electricians",
    "slug": "electrical-repair-mississauga",
    "primaryKeyword": "electrical repair mississauga",
    "secondaryKeywords": [
      "home electrical repair mississauga",
      "electrical services mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrical-repair",
    "serviceName": "Electrical Repair"
  },
  {
    "id": 109,
    "title": "Electrical Repair in Hamilton | Fast Response",
    "slug": "electrical-repair-hamilton",
    "primaryKeyword": "electrical repair hamilton",
    "secondaryKeywords": [
      "home electrical repair hamilton",
      "electrical services hamilton"
    ],
    "targetArea": "Hamilton, ON",
    "city": "Hamilton",
    "province": "ON",
    "citySlug": "hamilton",
    "pageType": "Service + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 70,
    "keywordDifficulty": 0,
    "cpc": 270,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrical-repair",
    "serviceName": "Electrical Repair"
  },
  {
    "id": 110,
    "title": "Emergency Electrician in Ottawa | Available Now",
    "slug": "emergency-electrician-ottawa",
    "primaryKeyword": "emergency electrician ottawa",
    "secondaryKeywords": [
      "24/7 electrician ottawa",
      "after hours electrician ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 220,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 111,
    "title": "Emergency Electrician in Mississauga | 24/7 Service",
    "slug": "emergency-electrician-mississauga",
    "primaryKeyword": "emergency electrician mississauga",
    "secondaryKeywords": [
      "24/7 electrician mississauga",
      "after hours electrician mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 112,
    "title": "Emergency Electrician in Hamilton | Available Now",
    "slug": "emergency-electrician-hamilton",
    "primaryKeyword": "emergency electrician hamilton",
    "secondaryKeywords": [
      "24/7 electrician hamilton",
      "after hours electrician hamilton"
    ],
    "targetArea": "Hamilton, ON",
    "city": "Hamilton",
    "province": "ON",
    "citySlug": "hamilton",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 60,
    "keywordDifficulty": 0,
    "cpc": 260,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 113,
    "title": "Emergency Electrician in Oshawa | 24/7 Service",
    "slug": "emergency-electrician-oshawa",
    "primaryKeyword": "emergency electrician oshawa",
    "secondaryKeywords": [
      "24/7 electrician oshawa",
      "after hours electrician oshawa"
    ],
    "targetArea": "Oshawa, ON",
    "city": "Oshawa",
    "province": "ON",
    "citySlug": "oshawa",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 70,
    "keywordDifficulty": 0,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 114,
    "title": "Emergency Electrician in Whitby | Available Now",
    "slug": "emergency-electrician-whitby",
    "primaryKeyword": "emergency electrician whitby",
    "secondaryKeywords": [
      "24/7 electrician whitby",
      "after hours electrician whitby"
    ],
    "targetArea": "Whitby, ON",
    "city": "Whitby",
    "province": "ON",
    "citySlug": "whitby",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 70,
    "keywordDifficulty": 0,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 115,
    "title": "Emergency Electrician in Scarborough | 24/7 Service",
    "slug": "emergency-electrician-scarborough",
    "primaryKeyword": "emergency electrician scarborough",
    "secondaryKeywords": [
      "24/7 electrician scarborough",
      "after hours electrician scarborough"
    ],
    "targetArea": "Scarborough, ON",
    "city": "Scarborough",
    "province": "ON",
    "citySlug": "scarborough",
    "pageType": "Modifier + City Page",
    "searchIntent": "Transactional / Urgent",
    "volume": 50,
    "keywordDifficulty": 0,
    "cpc": 270,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "emergency-electrician",
    "serviceName": "Emergency Electrician"
  },
  {
    "id": 116,
    "title": "Licensed Electrician in Ottawa | Certified & Insured",
    "slug": "licensed-electrician-ottawa",
    "primaryKeyword": "licensed electrician ottawa",
    "secondaryKeywords": [
      "certified electrician ottawa",
      "master electrician ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 220,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 117,
    "title": "Licensed Electrician in Mississauga | Certified & Insured",
    "slug": "licensed-electrician-mississauga",
    "primaryKeyword": "licensed electrician mississauga",
    "secondaryKeywords": [
      "certified electrician mississauga",
      "master electrician mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "electrician-near-me",
    "serviceName": "Local Electrician"
  },
  {
    "id": 118,
    "title": "Residential Electrician in Ottawa | Home Electrical",
    "slug": "residential-electrician-ottawa",
    "primaryKeyword": "residential electrician ottawa",
    "secondaryKeywords": [
      "home electrician ottawa",
      "residential electrical services ottawa"
    ],
    "targetArea": "Ottawa, ON",
    "city": "Ottawa",
    "province": "ON",
    "citySlug": "ottawa",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 80,
    "keywordDifficulty": 0,
    "cpc": 220,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 119,
    "title": "Residential Electrician in Mississauga | Home Electrical",
    "slug": "residential-electrician-mississauga",
    "primaryKeyword": "residential electrician mississauga",
    "secondaryKeywords": [
      "home electrician mississauga",
      "residential electrical services mississauga"
    ],
    "targetArea": "Mississauga, ON",
    "city": "Mississauga",
    "province": "ON",
    "citySlug": "mississauga",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 70,
    "keywordDifficulty": 0,
    "cpc": 250,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 120,
    "title": "Residential Electrician in Oshawa | Home Electrical",
    "slug": "residential-electrician-oshawa",
    "primaryKeyword": "residential electrician oshawa",
    "secondaryKeywords": [
      "home electrician oshawa",
      "residential electrical services oshawa"
    ],
    "targetArea": "Oshawa, ON",
    "city": "Oshawa",
    "province": "ON",
    "citySlug": "oshawa",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "residential-electrician",
    "serviceName": "Residential Electrician"
  },
  {
    "id": 121,
    "title": "Commercial Electrician in Vaughan | Business Electrical",
    "slug": "commercial-electrician-vaughan",
    "primaryKeyword": "commercial electrician vaughan",
    "secondaryKeywords": [
      "commercial electrical services vaughan",
      "business electrician vaughan"
    ],
    "targetArea": "Vaughan, ON",
    "city": "Vaughan",
    "province": "ON",
    "citySlug": "vaughan",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 300,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 122,
    "title": "Commercial Electrician in Markham | Business Electrical",
    "slug": "commercial-electrician-markham",
    "primaryKeyword": "commercial electrician markham",
    "secondaryKeywords": [
      "commercial electrical services markham",
      "business electrician markham"
    ],
    "targetArea": "Markham, ON",
    "city": "Markham",
    "province": "ON",
    "citySlug": "markham",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 123,
    "title": "Commercial Electrician in Richmond Hill | Business",
    "slug": "commercial-electrician-richmond-hill",
    "primaryKeyword": "commercial electrician richmond hill",
    "secondaryKeywords": [
      "commercial electrical services richmond hill",
      "business electrician richmond hill"
    ],
    "targetArea": "Richmond Hill, ON",
    "city": "Richmond Hill",
    "province": "ON",
    "citySlug": "richmond-hill",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 300,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  },
  {
    "id": 124,
    "title": "Commercial Electrician in Aurora | Business Electrical",
    "slug": "commercial-electrician-aurora",
    "primaryKeyword": "commercial electrician aurora",
    "secondaryKeywords": [
      "commercial electrical services aurora",
      "business electrician aurora"
    ],
    "targetArea": "Aurora, ON",
    "city": "Aurora",
    "province": "ON",
    "citySlug": "aurora",
    "pageType": "Modifier + City Page",
    "searchIntent": "Commercial / Transactional",
    "volume": 150,
    "keywordDifficulty": 0,
    "cpc": 280,
    "priority": "High",
    "ctaStrategy": "Get a Quote | Call Now | Book Online",
    "serviceSlug": "commercial-electrician",
    "serviceName": "Commercial Electrician"
  }
] as const satisfies ElectricianPage[];


export function getElectricianPageBySlug(slug: string) { return ELECTRICIAN_PAGES.find((page) => page.slug === slug); }
export function getServiceBySlug(slug: string) { return ELECTRICIAN_SERVICES.find((service) => service.slug === slug); }
export function getPagesByService(serviceSlug: string) { return ELECTRICIAN_PAGES.filter((page) => page.serviceSlug === serviceSlug); }
export function getPagesByCity(citySlug: string) { return ELECTRICIAN_PAGES.filter((page) => page.citySlug === citySlug); }
export function getPriorityPages(limit = 10) { return [...ELECTRICIAN_PAGES].filter((page) => page.priority.toLowerCase().includes("high")).sort((a,b)=>Number(b.volume)-Number(a.volume)).slice(0, limit); }
export function buildCanonicalPath(slug: string) { return `/${slug}`; }
export function titleCase(input: string) { return input.replace(/\b\w/g, (char) => char.toUpperCase()); }

const CITY_CONTEXT: Record<string, { neighbourhood: string; landmark: string; climate: string }> = {
  edmonton: { neighbourhood: "Oliver, Strathcona, and newer communities beyond Anthony Henday Drive", landmark: "the North Saskatchewan River valley", climate: "long, cold winters that can raise heating and garage-circuit demand" },
  calgary: { neighbourhood: "Beltline condos, northwest suburbs, and southeast garage developments", landmark: "the Bow River corridor", climate: "chinook swings and winter cold snaps that can expose weak breakers or overloaded panels" },
  toronto: { neighbourhood: "Scarborough, Etobicoke, North York, and older central neighbourhoods", landmark: "the Gardiner and Don Valley Parkway corridors", climate: "humid summers and cold winters that place different loads on cooling, heating, and older wiring" },
  vancouver: { neighbourhood: "Kitsilano, Mount Pleasant, and dense strata buildings downtown", landmark: "False Creek and Burrard Inlet", climate: "wet coastal weather that makes exterior devices, parking areas, and service access worth planning carefully" },
  ottawa: { neighbourhood: "Kanata, Centretown, Orleans, and older homes near the core", landmark: "Parliament Hill and the Ottawa River", climate: "freeze-thaw winters that can increase heating loads and exterior electrical wear" },
  mississauga: { neighbourhood: "Square One condos, Port Credit homes, and Meadowvale subdivisions", landmark: "Pearson Airport and the Credit River", climate: "lake-effect storms and busy commuter routes that can affect access and scheduling" },
  winnipeg: { neighbourhood: "Wolseley, St. Boniface, and suburban homes near the Perimeter Highway", landmark: "The Forks at the Red and Assiniboine rivers", climate: "extreme prairie winters that make dependable panels, garage circuits, and heating loads important" },
  barrie: { neighbourhood: "Allandale, Letitia Heights, and growing subdivisions near Mapleview Drive", landmark: "Kempenfelt Bay", climate: "snowbelt conditions that can affect exterior equipment, garages, and winter electrical loads" },
  hamilton: { neighbourhood: "Durand, Westdale, Stoney Creek, and lower-city older homes", landmark: "the Niagara Escarpment", climate: "lake-effect weather and older housing stock that can influence panel and wiring decisions" },
  oakville: { neighbourhood: "Bronte, Kerr Village, and Glen Abbey homes", landmark: "Lake Ontario and Sixteen Mile Creek", climate: "lakeside weather that can affect exterior lighting, garages, and service access" },
  abbotsford: { neighbourhood: "Clearbrook, Sumas Prairie, and hillside residential areas", landmark: "Sumas Mountain", climate: "wet Fraser Valley seasons that make exterior circuits and outbuildings important to assess" },
  kelowna: { neighbourhood: "Rutland, Glenmore, and Mission-area homes", landmark: "Okanagan Lake", climate: "hot summers and wildfire-season planning that can affect cooling loads and backup-power conversations" },
  london: { neighbourhood: "Old North, Wortley Village, and subdivisions near Hyde Park", landmark: "the Thames River", climate: "southwestern Ontario storms and winter freeze-thaw cycles that can stress exterior devices" },
  brampton: { neighbourhood: "Bramalea, Mount Pleasant, and Springdale homes", landmark: "Chinguacousy Park", climate: "hot summers, cold winters, and high-growth subdivisions that often bring capacity questions" },
  kitchener: { neighbourhood: "Downtown Kitchener, Doon, and Stanley Park", landmark: "Victoria Park and the ION corridor", climate: "Waterloo Region winters and renovation-heavy neighbourhoods that can affect panel planning" },
  victoria: { neighbourhood: "James Bay, Fernwood, and Saanich-area homes", landmark: "the Inner Harbour", climate: "mild but damp coastal weather that matters for exterior circuits and older character homes" },
  saskatoon: { neighbourhood: "Nutana, Riversdale, and Stonebridge homes", landmark: "the South Saskatchewan River", climate: "prairie cold and summer storms that make panel reliability and surge concerns worth discussing" },
  halifax: { neighbourhood: "North End, Clayton Park, and Dartmouth crossings", landmark: "Halifax Harbour", climate: "Atlantic storms and salt-air exposure that can affect exterior devices and service equipment" },
  burnaby: { neighbourhood: "Metrotown towers, Brentwood, and Edmonds homes", landmark: "Burnaby Mountain", climate: "wet Lower Mainland weather and strata access rules that affect many service visits" },
  aurora: { neighbourhood: "Aurora Heights, Bayview Wellington, and homes near Yonge Street", landmark: "the Aurora Cultural Centre", climate: "York Region winter loads and suburban panel capacity questions" },
  burlington: { neighbourhood: "Aldershot, Millcroft, and downtown lakeside homes", landmark: "the Burlington waterfront and Niagara Escarpment", climate: "lake-effect weather that can influence exterior circuits and garage wiring" },
  oshawa: { neighbourhood: "Kedron, Lakeview, and older central Oshawa homes", landmark: "Ontario Tech University and the Oshawa waterfront", climate: "Durham Region winter storms and mixed housing ages that affect troubleshooting" },
  vaughan: { neighbourhood: "Maple, Woodbridge, and Concord commercial areas", landmark: "Vaughan Metropolitan Centre", climate: "rapid growth and winter loads that often lead to panel and commercial circuit planning" },
  "richmond-hill": { neighbourhood: "Bayview Hill, Oak Ridges, and Yonge Street corridors", landmark: "Richmond Green", climate: "York Region cold snaps and newer-home load demands that can affect service sizing" },
  waterloo: { neighbourhood: "Uptown Waterloo, Laurelwood, and university-area rentals", landmark: "Waterloo Park", climate: "student housing turnover, winter loads, and tech-office demand that shape electrical work" },
  windsor: { neighbourhood: "Walkerville, Riverside, and South Windsor", landmark: "the Detroit River waterfront", climate: "humid summers, winter storms, and older homes that can affect panels and exterior devices" },
  scarborough: { neighbourhood: "Agincourt, Guildwood, and Birch Cliff", landmark: "the Scarborough Bluffs", climate: "lake-effect conditions and mixed high-rise, townhouse, and older-home electrical needs" },
  sudbury: { neighbourhood: "New Sudbury, Minnow Lake, and South End homes", landmark: "Ramsey Lake", climate: "northern Ontario cold and older housing stock that make capacity and reliability important" },
  newmarket: { neighbourhood: "Stonehaven, Gorham-College Manor, and Main Street properties", landmark: "Fairy Lake Park", climate: "York Region winters and suburban growth that can affect garages, panels, and renovations" },
  markham: { neighbourhood: "Unionville, Thornhill, and Cornell", landmark: "Main Street Unionville", climate: "dense residential growth and winter demand that often bring circuit and panel questions" },
  whitby: { neighbourhood: "Brooklin, Port Whitby, and Pringle Creek", landmark: "the Whitby waterfront", climate: "Durham Region lake-effect weather and growing subdivisions with EV and renovation demand" },
  guelph: { neighbourhood: "The Ward, Kortright Hills, and Exhibition Park", landmark: "the Speed River", climate: "winter freeze-thaw cycles and heritage homes that can complicate wiring access" },
  etobicoke: { neighbourhood: "The Kingsway, Mimico, and Rexdale", landmark: "Humber Bay and the Gardiner corridor", climate: "lake-adjacent weather and mixed condo, commercial, and older residential service needs" },
  "st-catharines": { neighbourhood: "Port Dalhousie, Glenridge, and Merritton", landmark: "the Welland Canal", climate: "Niagara lake-effect snow and older homes that can affect exterior and panel work" },
  kingston: { neighbourhood: "Sydenham Ward, Cataraqui, and Portsmouth", landmark: "Lake Ontario and Queen's University", climate: "waterfront weather and student-rental turnover that can influence service planning" },
  pickering: { neighbourhood: "Bay Ridges, Amberlea, and Duffin Heights", landmark: "Frenchman's Bay", climate: "lakeside storms and growing subdivisions that bring EV, panel, and renovation questions" },
  cambridge: { neighbourhood: "Galt, Hespeler, and Preston", landmark: "the Grand River", climate: "Waterloo Region winters and older industrial/residential buildings that affect access and wiring" },
  ajax: { neighbourhood: "Pickering Village, Southwood, and Nottingham", landmark: "the Ajax waterfront", climate: "Durham Region lake-effect weather and suburban growth that influence service demand" },
  peterborough: { neighbourhood: "East City, The Avenues, and north-end homes", landmark: "the Otonabee River and Trent University", climate: "Kawartha winter weather and older housing that can affect panels and exterior circuits" },
  "thunder-bay": { neighbourhood: "Port Arthur, Fort William, and Current River", landmark: "Lake Superior", climate: "northern cold, lake-effect snow, and long heating seasons that make reliability important" },
  "north-york": { neighbourhood: "Willowdale, York Mills, and Downsview", landmark: "Yonge Street and Highway 401", climate: "dense high-rise access, older homes, and winter loads that shape many electrical visits" },
  "niagara-falls": { neighbourhood: "Lundy's Lane, Chippawa, and tourist-area properties", landmark: "Niagara Falls and the Niagara Parkway", climate: "mist, lake-effect snow, and hospitality properties that can affect exterior and commercial work" },
  brantford: { neighbourhood: "Holmedale, West Brant, and Echo Place", landmark: "the Grand River", climate: "southwestern Ontario storms and growing subdivisions that can affect panels and circuits" },
};

export function buildSeoTitle(page: ElectricianPage) {
  const keyword = titleCase(page.primaryKeyword);
  const location = page.city === "Canada" ? "Canada" : page.city;
  let base = keyword.toLowerCase().includes(location.toLowerCase()) ? keyword : `${keyword} ${location}`;
  if (page.slug === "electrician-london-on") base = base.replace(/London Ontario/i, "London ON");
  if (page.city === "Canada" && page.pageType !== "Location Hub") base = `${base} Guide`;
  const finalLength = (value: string) => `${value} | ${SITE_NAME}`.length;
  if (finalLength(base) >= 50 && finalLength(base) <= 60) return base;
  if (page.city !== "Canada" && finalLength(`${base} Licensed Local`) <= 60) return `${base} Licensed Local`;
  if (finalLength(`${base} Electrician Help`) <= 60) return `${base} Electrician Help`;
  return base.slice(0, Math.max(30, 57 - SITE_NAME.length)).trim();
}

export function buildMeta(page: ElectricianPage): Metadata {
  const title = buildSeoTitle(page);
  const area = page.city === "Canada" ? "across Canada" : `in ${page.targetArea}`;
  const keyword = page.slug === "electrician-london-on" ? "electrician London ON" : page.primaryKeyword;
  const description = trimMetaDescription(`${keyword} ${area}. Call The Duo Electrician for licensed electrical help, clear quote steps, safety-first service, and fast booking.`, 158);
  return { title, description, alternates: { canonical: buildCanonicalPath(page.slug) }, openGraph: { title: `${title} | ${SITE_NAME}`, description, url: absoluteUrl(buildCanonicalPath(page.slug)), type: "website", siteName: SITE_NAME } };
}

export function buildH1(page: ElectricianPage) {
  if (page.city === "Canada") return `${titleCase(page.primaryKeyword)} Across Canada`;
  if (page.slug === "electrician-london-on") return "Electrician London ON";
  if (page.primaryKeyword.toLowerCase().includes(page.city.toLowerCase())) return `${titleCase(page.primaryKeyword)}, ${page.province}`;
  return `${titleCase(page.primaryKeyword)} in ${page.targetArea}`;
}

export function buildLocalFacts(page: ElectricianPage) {
  if (page.city === "Canada") return [
    "Canadian electrical work varies by province, utility, municipality, building type, and permit path, so licensed assessment matters before panels, circuits, EV chargers, or renovation wiring are changed.",
    "Climate also changes electrical demand: winter heating loads, summer cooling, older housing stock, basement suites, garages, and commercial equipment can all affect capacity and troubleshooting.",
  ];
  const provinceFacts: Record<string,string> = {
    AB: "Alberta properties often face cold-weather electrical load, garage circuits, basement developments, and growing EV charger demand in newer suburban neighbourhoods.",
    BC: "British Columbia electrical work often includes wet coastal conditions, strata access rules, older homes, renovation wiring, and EV charging in garages or multi-family parking areas.",
    ON: "Ontario service calls often involve older urban housing, condo electrical rooms, suburban panel capacity, ESA permit expectations, and busy commuter-area scheduling.",
    MB: "Manitoba homes and businesses often need electrical planning around winter heating loads, detached garages, older panels, and reliable circuits during extreme cold.",
  };
  const context = CITY_CONTEXT[page.citySlug];
  const cityFact = context ? `${page.city} service calls often involve ${context.neighbourhood}, with access and routing shaped by ${context.landmark}.` : `${page.city} electrical calls should include neighbourhood, property type, panel location, parking or access notes, and nearby landmarks so the electrician can plan the visit properly.`;
  const climateFact = context ? `${page.targetArea} also has ${context.climate}, so panel capacity, exterior devices, garages, and troubleshooting details should be discussed before scheduling.` : provinceFacts[page.province] ?? `${page.targetArea} service can vary by local permit expectations, utility coordination, weather, building age, and whether the work is residential, commercial, or emergency troubleshooting.`;
  return [cityFact, climateFact, provinceFacts[page.province] ?? `${page.province} rules, utility coordination, weather, and building age can affect the right electrical service path.`];
}

export function buildIntro(page: ElectricianPage) {
  const facts = buildLocalFacts(page);
  const pageRole = page.pageType.toLowerCase().includes("emergency") || page.serviceSlug.includes("emergency") ? "urgent safety triage" : page.pageType.toLowerCase().includes("city") ? "local service planning" : "service selection";
  return `${titleCase(page.primaryKeyword)} is usually searched when a property owner, manager, or tenant needs electrical work handled correctly instead of guessed at. The Duo Electrician helps with licensed troubleshooting, repairs, installations, panel planning, safety checks, and service scheduling for ${page.city === "Canada" ? "Canadian customers" : `customers in ${page.targetArea}`}. This ${page.pageType.toLowerCase()} is built around ${pageRole}, ${page.serviceName.toLowerCase()}, and the details that change how an electrician prepares before arriving. ${facts[0]} ${facts[1]} Share what changed, whether breakers are tripping, whether there is heat, smell, buzzing, flickering, outage, renovation work, or new equipment, and whether the issue affects one device, one room, or the whole property. Photos, panel labels, access notes, business hours, and recent renovation details can all help turn the first call into a safer, clearer next step.`;
}

export function buildServiceChecklist(page: ElectricianPage) {
  const byService: Record<string,string[]> = {
    "emergency-electrician": ["Turn off the affected breaker only if it is safe and accessible.", "Mention burning smells, sparks, heat, buzzing, water exposure, or partial outage immediately."],
    "residential-electrician": ["Describe the room, device, panel location, and whether renovation work is planned.", "List new appliances, EV chargers, lighting, or circuits that may affect capacity."],
    "commercial-electrician": ["Share business hours, access rules, tenant constraints, and whether downtime affects operations.", "Mention lighting, panels, equipment circuits, code repairs, or inspection deadlines."],
    "panel-upgrade": ["Have panel amperage, breaker space, and planned loads ready if known.", "Mention EV chargers, heat pumps, suites, hot tubs, or renovations that may require more capacity."],
    "ev-charger-installation": ["Share charger model, parking location, panel distance, and current service size if known.", "Ask about load calculation, permit path, and installation route before booking."],
  };
  return [...(byService[page.serviceSlug] ?? []), "Know whether the issue is urgent, planned, residential, commercial, or inspection-related.", "Keep people away from damaged outlets, exposed wiring, overheated panels, or wet electrical devices.", "Take photos only if it is safe; do not remove covers or touch wiring."].slice(0,5);
}

export function buildFaqs(page: ElectricianPage) {
  const area = page.city === "Canada" ? "Canada" : page.targetArea;
  const localDetail = page.city === "Canada" ? "province, utility, building type, and service size" : `${page.city} neighbourhood, property type, panel access, and nearby access constraints`;
  return [
    { question: `How do I book ${page.primaryKeyword} service in ${area}?`, answer: `Call or request a quote with the property type, electrical symptom, panel location, and timing. Clear details help The Duo Electrician match the visit to ${page.serviceName.toLowerCase()} instead of sending a generic service request.` },
    { question: `When is ${page.primaryKeyword} urgent in ${area}?`, answer: `Treat ${page.serviceName.toLowerCase()} as urgent when you notice burning smells, heat, buzzing, sparks, repeated breaker trips, partial power loss, water near electrical devices, or anything that feels unsafe to touch or reset. Mention ${localDetail} on the first call.` },
    { question: `Can I get ${page.primaryKeyword} pricing before work starts?`, answer: `You can usually get pricing direction after the electrician understands access, scope, parts, panel condition, permit needs, and whether troubleshooting is required. For ${area}, the most useful details are the panel location, affected rooms or equipment, and whether the work is planned, commercial, residential, or emergency-related.` },
  ];
}

export function getRelatedPages(page: ElectricianPage, limit = 10) {
  const sameCity = ELECTRICIAN_PAGES.filter((item)=>item.citySlug===page.citySlug && item.slug!==page.slug);
  const sameService = ELECTRICIAN_PAGES.filter((item)=>item.serviceSlug===page.serviceSlug && item.slug!==page.slug);
  const national = ELECTRICIAN_PAGES.filter((item)=>item.city==='Canada' && item.slug!==page.slug);
  return Array.from(new Map([...sameCity,...sameService,...national].map((item)=>[item.slug,item])).values()).slice(0, limit);
}

export function buildSchemas(page: ElectricianPage) {
  const faqs = buildFaqs(page);
  const schemas: Record<string, unknown>[] = [{ "@context":"https://schema.org", "@type":"Service", name: page.title.replace(/\s*\|.*$/, ""), serviceType: page.serviceName, description: buildIntro(page), provider: { "@type":"Organization", name: SITE_NAME, telephone: "+18885550191" }, areaServed: page.targetArea, url: absoluteUrl(buildCanonicalPath(page.slug)) }];
  if (page.city !== "Canada") schemas.push({ "@context":"https://schema.org", "@type":"Electrician", name: `${SITE_NAME} ${page.city}`, telephone: "+18885550191", url: absoluteUrl(buildCanonicalPath(page.slug)), areaServed: { "@type":"City", name: page.city, addressRegion: page.province, addressCountry: "CA" }, makesOffer: { "@type":"Offer", itemOffered: { "@type":"Service", name: page.serviceName } } });
  schemas.push({ "@context":"https://schema.org", "@type":"FAQPage", mainEntity: faqs.map((faq)=>({ "@type":"Question", name: faq.question, acceptedAnswer: { "@type":"Answer", text: faq.answer } })) }, { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement: [ { "@type":"ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type":"ListItem", position: 2, name: "Services", item: absoluteUrl("/services") }, { "@type":"ListItem", position: 3, name: page.serviceName, item: absoluteUrl(`/services/${page.serviceSlug}`) }, { "@type":"ListItem", position: 4, name: page.primaryKeyword, item: absoluteUrl(buildCanonicalPath(page.slug)) } ] });
  return schemas;
}

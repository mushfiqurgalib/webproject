import { Injectable } from '@angular/core';
import { laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  laptops: laptop[] = [
    {id: 1, name: "AVITA Essential 14", ram: "4GB LPDDR4 RAM", ssd:"256GB  SSD",price:"$29100",image:"..\\..\\assets\\avita14.jpg"},
    {id: 2, name: "Chuwi HeroBook Pro ", ram: "8GB LPDDR4 RAM", ssd:"256GB SSD",price:"$29400",image:"..\\..\\assets\\chuwi.jpg"},
    {id: 3, name: "HP 15s-du1115TU", ram: "4 GB DDR4 RAM", ssd:"1 TB 5400 SSD",price:"$33200",image:"..\\..\\assets\\Hp15s.jpg"},
    {id: 4, name: "HP 15s-du1114TU", ram: "4 GB DDR4 RAM", ssd:"1 TB 5400 SSD",price:"$33200",image:"..\\..\\assets\\Hpdu14.jpg"},
    {id: 5, name: "Chuwi HeroBook Pro ", ram: "8GB LPDDR4 RAM", ssd:"256GB SSD",price:"$29400",image:"..\\..\\assets\\chuwi.jpg"},
    {id: 6, name: "Chuwi HeroBook Pro ", ram: "8GB LPDDR4 RAM", ssd:"256GB SSD",price:"$29400",image:"..\\..\\assets\\chuwi.jpg"},
    {id: 7, name: "Chuwi HeroBook Pro ", ram: "8GB LPDDR4 RAM", ssd:"256GB SSD",price:"$29400",image:"..\\..\\assets\\chuwi.jpg"},
    {id: 8, name: "Chuwi HeroBook Pro ", ram: "8GB LPDDR4 RAM", ssd:"256GB SSD",price:"$29400",image:"..\\..\\assets\\chuwi.jpg"},
    {id: 9, name: "Chuwi HeroBook Pro ", ram: "8GB LPDDR4 RAM", ssd:"256GB SSD",price:"$29400",image:"..\\..\\assets\\chuwi.jpg"},
   
  ];
  constructor() {
   
   }
   getlaptops(): laptop[] {
    return this.laptops;
}}

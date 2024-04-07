import { useEffect, useMemo, useState } from 'react'

import type { Coffees } from '@/env'
import { getCoffees } from '@/services/getCoffee'
import { CustomButton } from '@/components/CustomButton'

export const CoffeeListContainer = () => {
  const [showAllProducts, setshowAllProducts] = useState(true)
  const [coffees, setCoffees] = useState<Coffees[]>([])
  const filteredCoffees: Coffees[] = useMemo(() =>{
    return showAllProducts ? coffees: coffees.filter(coffee => coffee.available ===true)
  }, [coffees, showAllProducts])
  
  useEffect(() => {
    getCoffees().then((data) => setCoffees(data))
  }, [])

  const handleAll = () => {
    setshowAllProducts(true)
  }
  const handleAvailable = () => {
    setshowAllProducts(false)
  }

  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='flex gap-4'>
        <CustomButton active={showAllProducts} onClick={handleAll}>All Products</CustomButton>
        <CustomButton active={!showAllProducts} onClick={handleAvailable}>Available Now</CustomButton>
      </div>
      <div>{
        filteredCoffees ? (
          filteredCoffees.map(coffee => (
            <div>
              <h1>{coffee.name}</h1>
              <img className='h-20 w-32' src={coffee.image} />
            </div>
          )))
          : (<p>Loading...</p>)
      }</div>
    </section>
  )
}

import { useEffect, useMemo, useState } from 'react'

import type { Coffees } from '@/env'

import { getCoffees } from '@/services/getCoffee'

import { CustomButton } from '@/components/CustomButton'
import { Card } from '@/components/Card'

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
      <div className='flex gap-4 mb-8'>
        <CustomButton active={showAllProducts} onClick={handleAll}>All Products</CustomButton>
        <CustomButton active={!showAllProducts} onClick={handleAvailable}>Available Now</CustomButton>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>{
        filteredCoffees ? (
          filteredCoffees.map(coffee => (
            <Card coffee={coffee} key={coffee.id} />
          )))
          : (<p>Loading...</p>)
      }</div>
    </section>
  )
}

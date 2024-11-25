import React from 'react'
import ContentHeader from "../components/ContentHeader"
import Card from "../components/Card"
import Dataflow from '../components/Dataflow'
import Statistics from '../page/Statistics'

const Dashboard = () => {
  return (
    <div>
        <ContentHeader />
        <Card />
        <Dataflow />
        <Statistics />
        
    </div>
  )
}

export default Dashboard
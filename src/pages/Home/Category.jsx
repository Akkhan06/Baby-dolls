import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCard from "./SubCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {


    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabSelect = (index) => {
      setSelectedTab(index);
    };

    const [subData, setSubData] = useState('csd')
    const [subData2, setSubData2] = useState([])

    useEffect(() => {
      fetch(`https://testtt-akkhan06.vercel.app/alltoys_text/${subData}`)
      .then(res => res.json())
      .then(data => {
        if (data.length >= 3) {
          const subData = data.slice(0, 3)
          setSubData2(subData)
        }else{
          setSubData2(data)
        }
      })
    },[subData])

      const filterItems = id => {
        setSubData(id)
      }
      
    
  return (
    
<div className="md:w-[1240px] mx-auto mt-20">

<Tabs className={''} selectedIndex={selectedTab} onSelect={handleTabSelect}>
<div className="text-center">
    <h1 className="text-5xl font-bold">Category List</h1>
<h1 className="text-gray-500 my-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, iste.</h1>
</div>
      <TabList className={'flex justify-center tabs gap-9 tabs-boxed mb-10 bg-warning font-semibold '}>
        <Tab onClick={() => filterItems('csd')} className="tab text-white" style={{ backgroundColor: selectedTab === 0 ? 'red' : '' }}>Cuddly Soft Dolls</Tab>
        <Tab onClick={() => filterItems('afd')}  className="tab text-white" style={{ backgroundColor: selectedTab === 1 ? 'red' : '' }}>Animal Friends Dolls</Tab>
        <Tab onClick={() => filterItems('abd')} className="tab text-white" style={{ backgroundColor: selectedTab === 2 ? 'red' : '' }}>Adorable Baby Dolls</Tab>
      </TabList>

      <TabPanel>
      <div className="grid grid-cols-1 w-11/12 md:w-auto mx-auto  md:grid-cols-3 justify-center gap-6">


      {
        subData2?.map(x => <SubCard key={x._id} x={x}></SubCard>)
      }

      </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 w-11/12 md:w-auto mx-auto md:grid-cols-3 justify-center gap-6">
      {
         subData2?.map(x => <SubCard key={x._id} x={x}></SubCard>)
      }
      </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 w-11/12 md:w-auto mx-auto  md:grid-cols-3 justify-center gap-6">
      {
        subData2.map(x => <SubCard key={x._id} x={x}></SubCard>)
      }
      </div>
      </TabPanel>
    </Tabs>

</div>

  );
};

export default Category;

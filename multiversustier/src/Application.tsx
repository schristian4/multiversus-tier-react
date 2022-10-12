import { useEffect, useState } from 'react';
import HeaderComponent from './HeaderComponent';

import batman from './image/batman.webp';
import finn from './image/finn.webp';
import superman from './image/superman.webp';
import bugs from './image/bugs.webp';
import shaggy from './image/shaggy.webp';
import jake from './image/jake.webp';
import lebron from './image/lebron.webp';
import harley from './image/harley.webp';
import taz from './image/taz.webp';
import arya from './image/arya.webp';
import steven from './image/steven.webp';
import velma from './image/velma.webp';
import reindog from './image/reindog.webp';
import garnet from './image/garnet.webp';
import wonder_woman from './image/wonder_woman.webp';
import tom_and_jerry from './image/tom_and_jerry.webp';
import iron_giant from './image/iron_giant.webp';

import './style.css';

const tierList_init = [{ S: [] }, { A: [] }, { B: [] }, { C: [] }, { D: [] }];
const characterList_init = [
  'batman',
  'finn',
  'superman',
  'bugs',
  'shaggy',
  'jake',
  'lebron',
  'harley',
  'taz',
  'arya',
  'steven',
  'velma',
  'reindog',
  'garnet',
  'wonder_woman',
  'tom_and_jerry',
  'iron_giant'
];

const characterImageArray = [
  batman,
  finn,
  superman,
  bugs,
  shaggy,
  jake,
  lebron,
  harley,
  taz,
  arya,
  steven,
  velma,
  reindog,
  garnet,
  wonder_woman,
  tom_and_jerry,
  iron_giant
];
interface RankListComponentProps {
  characterList?: string[];
}
const RankListComponent = ({ characterList }: RankListComponentProps) => {
  console.log(characterList);
  const handleModalDisplay = ()=> {
    
  }
  const renderCharacterList = characterList?.map((img: string, index: number) => {
      return (
        <img
          key={index}
          className="characterIcon"
          src={characterImageArray[index]}
          data-value={img}
          alt={img}
          onClick={handleModalDisplay}
        />
      );
    });
  
  return (
    <div className=" tier-full-list">
      <div className="tier-heading-wrapper">
        <p className="tier-heading">List:</p>
      </div>
      <div className="tier-full-body avatar-wrapper">
        {renderCharacterList}
      </div>
    </div>
  );
};
const TierListComponent = (tierList: any) => {
  // console.log(tierList);
  return <></>;
};
const Application = () => {
  const [characterList, setCharacterList] = useState<string[]>();
  const [tierList, setTierList] = useState<{}[]>();
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  function handleReset() {
    console.log('reset rows');
  }
  useEffect(() => {
    setCharacterList(characterList_init);
    setTierList(tierList_init);
  }, []);
  return (
    <div className="main-container glassmorph">
      <HeaderComponent handleReset={handleReset} />
      <div id="body-container">
        <RankListComponent characterList={characterList} />
        <TierListComponent tierList={tierList} />
      </div>
    </div>
  );
};

export default Application;

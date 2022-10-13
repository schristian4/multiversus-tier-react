import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import HeaderComponent from './HeaderComponent'

import batman from './image/batman.webp'
import finn from './image/finn.webp'
import superman from './image/superman.webp'
import bugs from './image/bugs.webp'
import shaggy from './image/shaggy.webp'
import jake from './image/jake.webp'
import lebron from './image/lebron.webp'
import harley from './image/harley.webp'
import taz from './image/taz.webp'
import arya from './image/arya.webp'
import steven from './image/steven.webp'
import velma from './image/velma.webp'
import reindog from './image/reindog.webp'
import garnet from './image/garnet.webp'
import wonder_woman from './image/wonder_woman.webp'
import tom_and_jerry from './image/tom_and_jerry.webp'
import iron_giant from './image/iron_giant.webp'

import './style.css'
import './modal.css'
import React from 'react'

const tierListKeys_init = ['S', 'A', 'B', 'C', 'D']

const tierList_init = [{ S: [] }, { A: [] }, { B: [] }, { C: [] }, { D: [] }]
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
	'iron_giant',
]

const characterList_init_Keys: any = [
	{0: 'batman'},
	{1: 'finn'},
	{2: 'superman'},
	{3: 'bugs'},
	{4: 'shaggy'},
	{5: 'jake'},
	{6: 'lebron'},
	{7: 'harley'},
	{8: 'taz'},
	{9: 'arya'},
	{10: 'steven'},
	{11: 'velma'},
	{12: 'reindog'},
	{13: 'garnet'},
	{14: 'wonder_woman'},
	{15: 'tom_and_jerry'},
	{16: 'iron_giant'},
]


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
	iron_giant,
]
interface RankListComponentProps {
	characterList?: string[]
	setToggleModalDisplay: Dispatch<SetStateAction<boolean>>
	setSelectedCharacter: Dispatch<SetStateAction<string>>
}

interface TierListProps {
	tierRowCharacterList: TierRowShape[]
	tierListKeys: string[]
	characterList?: string[]
	// tierList: {}[]
	// characterList: string[]
}

interface TierRowShape {
	[key: string]: string[]
}

const RankListComponent = ({ characterList, setToggleModalDisplay, setSelectedCharacter }: RankListComponentProps) => {
	const handleModalDisplay = (selectedCharacter: string) => {
		setSelectedCharacter(selectedCharacter)
		setToggleModalDisplay(true)
	}
	const renderCharacterList = characterList?.map((character: string, index: number) => {
		return (
			<img
				key={index}
				className="characterIcon"
				src={characterImageArray[index]}
				// data-value={character}
				alt={character}
				onClick={() => handleModalDisplay(character)}
			/>
		)
	})


	return (
		<div className=" tier-full-list">
			<div className="tier-heading-wrapper">
				<p className="tier-heading">List:</p>
			</div>
			<div className="tier-full-body avatar-wrapper">{renderCharacterList}</div>
		</div>
	)
}

const TierListComponent = ({ tierRowCharacterList, tierListKeys, characterList }: TierListProps) => {
  
	let RenderTierRow = tierRowCharacterList.map((tierRow, index_x: number) => {
		let tierRowKey = Object.keys(tierRow)[0]
		let charcerRow = tierRow[tierRowKey].map((char: string, index: number) => {

    function findCharacterIndex(){ 
      for (let i = 0; i < characterList_init_Keys.length; i++) {
        for (let y: any = 0; y < characterList_init_Keys.length; y++) {
        if(characterList_init_Keys[i][y] === char){
          return Object.keys(characterList_init_Keys[i])[0]
        }
      }
    } 
  }
    let imageLink: any = findCharacterIndex()
			return (
				<img
          key={index}
					className="avatar characterRemoveIcon"
					// src={characterImageArray[index]}
          src={characterImageArray[imageLink]}
					alt={char}></img>
			)
		})
		return (
			<div className="tier-row" key={index_x}>
				<div className="tier-heading-wrapper">
					<p className="tier-heading">{tierRowKey}:</p>
				</div>
				<div className="tier-body avatar-wrapper">{charcerRow /* ${characters.join(",").replace(/,/g, "")} */}</div>
			</div>
		)
	})

  useEffect(() => {
    console.log('render charlist: ', tierRowCharacterList)
   }, [])
  
	return <>{RenderTierRow}</>
}

interface RankModalProps {
	toggleModalDisplay: boolean
	setToggleModalDisplay: Dispatch<SetStateAction<boolean>>
	setSelectedTierRank: Dispatch<SetStateAction<string>>
	tierListKeys: string[]
	// selectedCharacter: string
}
const RankModal = ({
	toggleModalDisplay,
	setToggleModalDisplay,
	setSelectedTierRank,
	tierListKeys,
}: RankModalProps) => {
	function handleSelectedTier(selectedTier: string) {
		setSelectedTierRank(selectedTier)
		setToggleModalDisplay(false)
	}
	const rankingModal = tierListKeys.map((keys: string) => {
		return (
			<div
				className="ranking-key-text"
				onClick={() => handleSelectedTier(keys)}>
				{keys}
			</div>
		)
	})
	const TierRankModal = (
		<div
			id="myModal"
			className="modal">
			<div className="modal-content">
				<span
					className="close"
					onClick={() => setToggleModalDisplay(false)}>
					&times;
				</span>
				<div id="tier-modal-selection-container">
					<div className="ranking-select-row glassmorph">{rankingModal}</div>
				</div>
			</div>
		</div>
	)
	return toggleModalDisplay === true ? <>{TierRankModal}</> : <></>
}
const Application = () => {
	const [characterList, setCharacterList] = useState<string[]>(characterList_init)
	const [tierListKeys, setTierListKeys] = useState<string[]>(tierListKeys_init)
	const [tierRowCharacterList, setTierRowCharacterList] = useState<any>([{ S: [] }, { A: [] }, { B: [] }, { C: [] }, { D: [] }])
	const [toggleModalDisplay, setToggleModalDisplay] = useState<boolean>(false)
	const [selectedCharacter, setSelectedCharacter] = useState('')
	const [selectedTierRank, setSelectedTierRank] = useState('')
  const [toggleReset, setToggleReset] = useState(false)

  const handleReset =()=>{ 
    setToggleReset(true)
  }
	useEffect(() => {
    function handleReset() {
      setCharacterList(characterList_init)
      setTierListKeys(tierListKeys_init)
      setTierRowCharacterList([{ S: [] }, { A: [] }, { B: [] }, { C: [] }, { D: [] }])
      setSelectedCharacter('')
      setSelectedTierRank('')
      debugger
    }
		function resetSelection() {
			setSelectedCharacter('')
			setSelectedTierRank('')
		}
		function updateTierList() {
			console.log('updateTierList')
			// let selectedCharacterObject = { [selectedTierRank]: selectedCharacter}
      let tempArray = [...tierRowCharacterList]
			for (let i = 0; i < tierRowCharacterList.length; i++) {
				if (Object.keys(tierRowCharacterList[i])[0] === selectedTierRank) {
          tempArray[i][selectedTierRank].push(selectedCharacter)
          setTierRowCharacterList(tempArray)
				}
			}
		}
    if(toggleReset === true){ 
      handleReset()
      setToggleReset(false)
    }
    else{
      updateTierList()
    }
		resetSelection()
	}, [selectedTierRank, toggleReset])
	return (
		<div className="main-container glassmorph">
      <React.StrictMode>
			<HeaderComponent handleReset={handleReset} />
			<div id="body-container">
				<RankListComponent
					characterList={characterList}
					setToggleModalDisplay={setToggleModalDisplay}
					setSelectedCharacter={setSelectedCharacter}
				/>
				<RankModal
					toggleModalDisplay={toggleModalDisplay}
					setToggleModalDisplay={setToggleModalDisplay}
					tierListKeys={tierListKeys}
					setSelectedTierRank={setSelectedTierRank}
				/>

				<TierListComponent
					tierRowCharacterList={tierRowCharacterList}
					tierListKeys={tierListKeys}
					characterList={characterList}
				/>
			</div>
      </React.StrictMode>
		</div>
	)
}

export default Application

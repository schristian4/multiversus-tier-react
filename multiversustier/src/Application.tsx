import { useEffect, useState } from 'react'

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

import HeaderComponent from './components/HeaderComponent'
import RankListComponent from './components/RankListComponent'
import TierListComponent from './components/TierListComponent'
import RankModalComponent from './components/RankModalComponent'

export const tierListKeys_init = ['S', 'A', 'B', 'C', 'D']

export const tierList_init = [{ S: [] }, { A: [] }, { B: [] }, { C: [] }, { D: [] }]
export const characterList_init = [
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

export const characterList_init_Keys: any = [
	{ 0: 'batman' },
	{ 1: 'finn' },
	{ 2: 'superman' },
	{ 3: 'bugs' },
	{ 4: 'shaggy' },
	{ 5: 'jake' },
	{ 6: 'lebron' },
	{ 7: 'harley' },
	{ 8: 'taz' },
	{ 9: 'arya' },
	{ 10: 'steven' },
	{ 11: 'velma' },
	{ 12: 'reindog' },
	{ 13: 'garnet' },
	{ 14: 'wonder_woman' },
	{ 15: 'tom_and_jerry' },
	{ 16: 'iron_giant' },
]

export const characterImageArray_init_Keys: any = [
	{ 0: 'batman' },
	{ 1: 'finn' },
	{ 2: 'superman' },
	{ 3: 'bugs' },
	{ 4: 'shaggy' },
	{ 5: 'jake' },
	{ 6: 'lebron' },
	{ 7: 'harley' },
	{ 8: 'taz' },
	{ 9: 'arya' },
	{ 10: 'steven' },
	{ 11: 'velma' },
	{ 12: 'reindog' },
	{ 13: 'garnet' },
	{ 14: 'wonder_woman' },
	{ 15: 'tom_and_jerry' },
	{ 16: 'iron_giant' },
]
export const characterImageArray_init_keys = [
	{ batman: batman },
	{ finn: finn },
	{ superman: superman },
	{ bugs: bugs },
	{ shaggy: shaggy },
	{ jake: jake },
	{ lebron: lebron },
	{ harley: harley },
	{ taz: taz },
	{ arya: arya },
	{ steven: steven },
	{ velma: velma },
	{ reindog: reindog },
	{ garnet: garnet },
	{ wonder_woman: wonder_woman },
	{ tom_and_jerry: tom_and_jerry },
	{ iron_giant: iron_giant },
]
export const characterImageArray = [
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
const Application = () => {
	const [characterList, setCharacterList] = useState<string[]>([
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
	])
	const [tierListKeys, setTierListKeys] = useState<string[]>(tierListKeys_init)
	const [tierRowCharacterList, setTierRowCharacterList] = useState<any>([
		{ S: [] },
		{ A: [] },
		{ B: [] },
		{ C: [] },
		{ D: [] },
	])
	const [toggleModalDisplay, setToggleModalDisplay] = useState<boolean>(false)
	const [selectedCharacter, setSelectedCharacter] = useState('')
	const [selectedTierRank, setSelectedTierRank] = useState('')
	const [toggleReset, setToggleReset] = useState(false)

	const handleReset = () => {
		setToggleReset(true)
	}
	useEffect(() => {
		function handleReset() {
			setCharacterList(characterList_init)
			setTierListKeys(tierListKeys_init)
			setTierRowCharacterList([{ S: [] }, { A: [] }, { B: [] }, { C: [] }, { D: [] }])
			resetSelection()
			debugger
		}
		function resetSelection() {
			setSelectedCharacter('')
			setSelectedTierRank('')
		}
		function updateTierList() {
			let tempArray = [...tierRowCharacterList]
			for (let i = 0; i < tierRowCharacterList.length; i++) {
				if (Object.keys(tierRowCharacterList[i])[0] === selectedTierRank) {
					tempArray[i][selectedTierRank].push(selectedCharacter)
					setTierRowCharacterList(tempArray)
				}
			}
			if (selectedCharacter !== '') {
				let newCharacterList = [...characterList]
				for (let z = 0; z < newCharacterList.length; z++) {
					if (newCharacterList[z] === selectedCharacter) {
						newCharacterList.splice(z, 1)
						setCharacterList(newCharacterList)
					}
				}
			}
		}
		if (toggleReset === true) {
			handleReset()
			setToggleReset(false)
		} else {
			updateTierList()
		}
		resetSelection()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedTierRank, toggleReset])
	return (
		<div className="main-container glassmorph">
			<HeaderComponent handleReset={handleReset} />
			<div id="body-container">
				<RankListComponent
					characterList={characterList}
					setToggleModalDisplay={setToggleModalDisplay}
					setSelectedCharacter={setSelectedCharacter}
				/>
				<RankModalComponent
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
		</div>
	)
}

export default Application

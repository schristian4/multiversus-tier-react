import { useEffect, useState } from 'react'

import './style.css'
import './modal.css'

import HeaderComponent from './components/HeaderComponent'
import RankListComponent from './components/RankListComponent'
import TierListComponent from './components/TierListComponent'
import RankModalComponent from './components/RankModalComponent'
import { characterList_init, tierListKeys_init, tierList_initShape } from './interface'

const Application = () => {
	const [characterList, setCharacterList] = useState<string[]>([...characterList_init])
	const [characterListRef, setCharacterListRef] = useState<string[]>([...characterList_init])
	const [tierListKeys, setTierListKeys] = useState<string[]>(tierListKeys_init)
	const [tierRowCharacterList, setTierRowCharacterList] = useState<tierList_initShape[]>([
		{ S: [] },
		{ A: [] },
		{ B: [] },
		{ C: [] },
		{ D: [] },
	])
	const [toggleModalDisplay, setToggleModalDisplay] = useState<boolean>(false)
	const [selectedCharacter, setSelectedCharacter] = useState<string>('')
	const [selectedTierRank, setSelectedTierRank] = useState('')
	const [searchInputValue, setSearchInputValue] = useState('')
	const [toggleReset, setToggleReset] = useState(false)

	function handleInputChange(evt: any) {
		searchCharacter(evt.target.value)
		setSearchInputValue(evt.target.value)
	}
	function searchCharacter(targetValue: string) {
		let filter: string = targetValue.toUpperCase()
		var filtered = characterListRef.filter(function (character) {
			if (character.toUpperCase().indexOf(filter) > -1) {
				return character
			}
		})
		setCharacterList(filtered)
	}

	const handleReset = () => {
		setToggleReset(true)
	}
	useEffect(() => {
		function handleReset() {
			setCharacterList(characterList_init)
			setCharacterListRef(characterList_init)
			setTierListKeys(tierListKeys_init)
			setTierRowCharacterList([{ S: [] }, { A: [] }, { B: [] }, { C: [] }, { D: [] }])
			resetSelection()
		}
		function resetSelection() {
			setSelectedCharacter('')
			setSelectedTierRank('')
			setSearchInputValue('')
		}
		function updateTierList() {
			let tempArray: any[] = [...tierRowCharacterList]
			for (let i = 0; i < tierRowCharacterList.length; i++) {
				if (Object.keys(tierRowCharacterList[i])[0] === selectedTierRank) {
					tempArray[i][selectedTierRank].push(selectedCharacter)
					setTierRowCharacterList(tempArray)
				}
			}
			if (selectedCharacter !== '') {
				let newCharacterList = [...characterListRef]
				for (let z = 0; z < newCharacterList.length; z++) {
					if (newCharacterList[z] === selectedCharacter) {
						newCharacterList.splice(z, 1)
						setCharacterList(newCharacterList)
						setCharacterListRef(newCharacterList)
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
			<HeaderComponent
				handleReset={handleReset}
				handleInputChange={handleInputChange}
				searchInputValue={searchInputValue}
			/>
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

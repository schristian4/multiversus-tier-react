import { Dispatch, SetStateAction, useEffect } from 'react'
import {  characterImageArray_init_keys, characterList_init_Keys, characterList_init_KeysShape } from '../interface'

interface RankListComponentProps {
	characterList?: string[]
	setToggleModalDisplay: Dispatch<SetStateAction<boolean>>
	setSelectedCharacter: Dispatch<SetStateAction<string>>
}

const RankListComponent = ({ characterList, setToggleModalDisplay, setSelectedCharacter }: RankListComponentProps) => {

	const handleModalDisplay = (selectedCharacter: string) => {
		setSelectedCharacter(selectedCharacter)
		setToggleModalDisplay(true)
		
	}
	
	useEffect(() => {
		console.log('Rank list', characterList)
	}, [characterList])
	

	const newRenderList = characterList_init_Keys.map((character: characterList_init_KeysShape, index: number) => {
		return characterList?.map((characterItem: string)=> {
      if(characterItem === character[index]){
				let characterImageArray: any = characterImageArray_init_keys[index]
				return (
					<img
						key={index}
						className="characterIcon"
						src={characterImageArray[characterItem]}
						alt={characterItem}
						onClick={() => handleModalDisplay(characterItem)}
					/>
				)
			}
    })
	})

	return (
		<div className=" tier-full-list">
			<div className="tier-heading-wrapper">
				<p className="tier-heading">List:</p>
			</div>
			<div className="tier-full-body avatar-wrapper">{newRenderList}</div>
		</div>
	)
}
export default RankListComponent

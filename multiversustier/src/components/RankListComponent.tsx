import { Dispatch, SetStateAction, useEffect } from "react"
import { characterImageArray, characterImageArray_init_keys } from "../Application"

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
		console.log("rerender list", characterList)
	}, [characterList])
	
	const renderCharacterList = characterList?.map((character: any, index: number) => {
		for(let i = 0; i < characterImageArray_init_keys.length; i++){
			let characterFound = Object.keys(characterImageArray_init_keys[i])[0]
			if(character === characterFound){
				let char: string = character
				let characterImageArray: any = characterImageArray_init_keys[i]
				let imageSrc: any = characterImageArray[char]
				return (
					<img
						key={index}
						className="characterIcon"
						src={imageSrc}
						// data-value={character}
						alt={character}
						onClick={() => handleModalDisplay(character)}
					/>
				)
			}

			// console.log(characterImageArray_init_keys[i])
		}

		
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
export default RankListComponent
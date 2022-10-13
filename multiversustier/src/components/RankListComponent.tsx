import { Dispatch, SetStateAction } from "react"
import { characterImageArray } from "../Application"

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
export default RankListComponent
import React, { Dispatch, SetStateAction } from 'react'


interface RankModalProps {
	toggleModalDisplay: boolean
	setToggleModalDisplay: Dispatch<SetStateAction<boolean>>
	setSelectedTierRank: Dispatch<SetStateAction<string>>
	tierListKeys: string[]
	// selectedCharacter: string
}

const RankModalComponent = ({
	toggleModalDisplay,
	setToggleModalDisplay,
	setSelectedTierRank,
	tierListKeys,
}: RankModalProps) => {
	function handleSelectedTier(selectedTier: string) {
		setSelectedTierRank(selectedTier)
		setToggleModalDisplay(false)
	}
	const rankingModal = tierListKeys.map((keys: string, index: number) => {
		return (
			<div
				className="ranking-key-text"
				key={index}
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

export default RankModalComponent
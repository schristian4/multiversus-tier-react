import { useEffect } from 'react'
import { characterImageArray, characterList_init_Keys } from '../Application'

interface TierRowShape {
	[key: string]: string[]
}
interface TierListProps {
	tierRowCharacterList: TierRowShape[]
	tierListKeys: string[]
	characterList?: string[]
	// tierList: {}[]
	// characterList: string[]
}

const TierListComponent = ({ tierRowCharacterList, tierListKeys, characterList }: TierListProps) => {
	let RenderTierRow = tierRowCharacterList.map((tierRow: { [x: string]: string[] }, index_x: number) => {
		let tierRowKey = Object.keys(tierRow)[0]
		let charcerRow = tierRow[tierRowKey].map((char: string, index: number) => {
			function findCharacterIndex() {
				for (let i = 0; i < characterList_init_Keys.length; i++) {
					for (let y: any = 0; y < characterList_init_Keys.length; y++) {
						if (characterList_init_Keys[i][y] === char) {
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
			<div
				className="tier-row"
				key={index_x}>
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

export default TierListComponent

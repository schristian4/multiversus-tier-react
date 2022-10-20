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

export const tierListKeys_init = ['S', 'A', 'B', 'C', 'D']

export interface tierList_initShape {
	[key: string]: []
}
export const tierList_init: tierList_initShape[] = [{ S: [] }, { A: [] }, { B: [] }, { C: [] }, { D: [] }]

export const characterList_init: string[] = [
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

export interface characterList_init_KeysShape {
	[key: number]: string
}

export const characterList_init_Keys: characterList_init_KeysShape[] = [
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

export interface characterImageArray_init_KeysShape {
	[key: number]: string
}
export const characterImageArray_init_Keys: characterImageArray_init_KeysShape[] = [
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

interface characterImageArray_init_keysShape {
	[key: string]: any
}
export const characterImageArray_init_keys: characterImageArray_init_keysShape[] = [
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
export const characterImageArray: any[] = [
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

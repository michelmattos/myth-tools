// @flow
export type Type = 'CUSTOM' | 'NONE' | 'EXPECTED' | 'SPECIAL' | 'RANDOM' | 'COMPLETE'

export type Element = {
  id: number,
  type: Type,
  name: string,
  unique: boolean,
}

export type UnsavedElement = {
  type: Type,
  name: string,
  unique: boolean,
}

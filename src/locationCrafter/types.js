// @flow
export type Type = 'CUSTOM' | 'NONE' | 'EXPECTED' | 'SPECIAL' | 'RANDOM' | 'COMPLETE'

export type Element = {
  type: Type,
  name: string,
  unique: boolean,
}

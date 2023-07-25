export type GenericResourceCreated = {
  id: string
  createdAt: string
  updatedAt: string
}

export type GenericResourceWithoutID<Type> = {
  [Property in keyof Type as Exclude<Property, 'id'>]+?: Type[Property]
}

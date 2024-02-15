import { Context } from "vm"
import { Address, Person } from "./types"

export const address = {
    Address: {
        residents: (parent: Address, args: never, { persons }: Context) => {
          return persons.filter((person: Person) => person.address ? person.address!.id == parent.id : false)
        }
      },
}
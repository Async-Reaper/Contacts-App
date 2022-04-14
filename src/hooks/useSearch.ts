import { useMemo } from "react";
import { IContacts } from "../models/IContact";

export const useSearch = (contacts: IContacts[], search: string):IContacts[] => {
    
    const searchContacts = useMemo(() => {
        if (contacts === undefined) {
            return contacts
        } else {
            return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        }
    }, [contacts, search]);

    return searchContacts
}
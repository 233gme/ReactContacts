import { ContactType } from '../../Types/contactsReducer';

const sortLeaders = (contacts: ContactType[]) => {
  const leaders = [...contacts].filter(item => item.rating > 0)
    .sort((a, b) => {
      if (a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
      return a.name.localeCompare(b.name);
    });
  if (leaders.length > 5) leaders.slice(0, 5);

  return leaders;
};

export default sortLeaders;

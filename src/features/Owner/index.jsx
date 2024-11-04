import { useEffect, useState } from "react";
import { useStore } from "react-redux";
// import { updateFirstName } from "../../app/store";
import { ownerSlice } from "./ownerSlice";

export default function Owner() {
    const store = useStore();
    const [owner, setOwner] = useState(store.getState().owner);

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.currentTarget.firstName.value;
        store.dispatch(ownerSlice.actions.updateFirstName(firstName))
    };

    useEffect(() => {
        store.subscribe(() => setOwner(store.getState().owner));
    }, [store]);

    return (
        <form onSubmit={handleSubmit} className="OwnerForm">
          {owner?.firstName ?(
            <span className="OwnerName">
              Le propriétaire du restaurant est {owner.firstName}
            </span>
          ) : (
            <span className="OwnerName">
              Le propriétaire du restaurant est pas configuré
            </span>
          )}
          <h2>Propriétaire du restaurant</h2>
          <label>
            Prénom du propriétaire
            <input type="text" name="firstName" />
          </label>
          <button type="submit">configurer le propriétaire</button>
        </form>
      );
}

import { useCallback } from "react";
import Reac, {useState, useCallback} from "react";

export default function alertToggle(initialstate = false) {
    const [toggle, setToggle] = useState(initialstate)

    const alert = useCallback(() => {
        setToggle(open => !open)
    }, []);

    return [toggle, alert]
    
}


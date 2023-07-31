import { createContext } from "react";

const AboutContext = createContext({
    dev :{
        name : 'Prathviraj Khande',
        email: 'phk151raj@gmail.com'
    }
})

AboutContext.displayName = "AboutContext";

export default AboutContext;
export default function isLeapYear(year) {

    const yearAsNumber = Number(year);
    
    switch (yearAsNumber % 4) {

        case 0:

            switch (yearAsNumber % 100) {

                case 0:

                    switch (yearAsNumber % 400) {
                        
                        case 0:      

                            return true;

                        default:

                            return false;
                    }

                default:

                    return true;
            }

        default:

            return false;
    }
}
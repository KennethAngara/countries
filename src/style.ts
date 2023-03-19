const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    flexCenterCenter: "flex justify-center items-center",
    flexCenterStart: "flex justify-center items-start",
    flexBetweenStart: "flex justify-between items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    };

    export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
};

export default styles;
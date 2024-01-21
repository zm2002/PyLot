export const convertJsonToLocationsArray = (jsonData) => {
    const locations = [];

    // console.log("INSIDE converJsonToLocationsArray!...");
    // console.log(jsonData);
  
    for (const [locationName, locationData] of Object.entries(jsonData)) {
      const { cars, time } = locationData.data;
      const formattedLocation = {
        name: locationName.replace(/_/g, ' '), // Replace underscores with spaces
        cars,
        time,
      };
      locations.push(formattedLocation);
    }
  
    return locations;
  };
  
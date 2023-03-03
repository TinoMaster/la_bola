export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const defaultDocuments = (store) => (next) => (actionInfo) => {
  const documentsDef = [
    {
      _id: "63ed2fc5d915aafa016e3ec5",
      numbers: {
        centena: 687,
        corrido_1: 60,
        corrido_2: 47,
      },
      date: "6-2-2023",
      schedule: "tarde",
      belong_app: "labola", 
      belong_group: "leonardo",
    },
    {
      _id: "63ed2fc5d915aafa016e3ec2",
      numbers: {
        centena: 225,
        corrido_1: 33,
        corrido_2: 50,
      },
      date: "6-2-2023",
      schedule: "noche",
    },
    ...actionInfo.action.payload,
  ];
  const updatedDocuments = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: documentsDef },
  };
  next(updatedDocuments);
};

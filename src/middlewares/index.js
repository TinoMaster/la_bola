export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const defaultDocuments = (store) => (next) => (actionInfo) => {
  const documentsDef = [
    {
      _id: "63ed2fc5d915aafa016e3ec5",
      numbers: {
        fijo: 87,
        corrido_1: 60,
        corrido_2: 47,
      },
      date: "6-2-2023",
      schedule: "tarde",
      lists: [
        {
          name: "J",
          single: [
            {
              number: 18,
              fijo: 40,
              corrido: 20,
            },
            {
              number: 25,
              fijo: 30,
              corrido: 10,
            },
            {
              number: 99,
              fijo: 100,
              corrido: 200,
            },
            {
              number: 84,
              fijo: 50,
              corrido: 35,
            },
            {
              number: 15,
              fijo: 50,
              corrido: 60,
            },
          ],
          parlet: [
            {
              numbers: [50, 41, 36, 25, 10],
              cash: 20,
            },
            {
              numbers: [55, 81, 96, 45, 20],
              cash: 50,
            },
            {
              numbers: [26, 32, 86, 66, 40],
              cash: 60,
            },
          ],
        },
        {
          name: "M",
          single: [
            {
              number: 19,
              fijo: 45,
              corrido: 50,
            },
            {
              number: 29,
              fijo: 35,
              corrido: 40,
            },
            {
              number: 1,
              fijo: 80,
              corrido: 20,
            },
            {
              number: 82,
              fijo: 80,
              corrido: 55,
            },
            {
              number: 25,
              fijo: 50,
              corrido: 60,
            },
          ],
          parlet: [
            {
              numbers: [80, 43, 26, 15, 0],
              cash: 20,
            },
            {
              numbers: [5, 8, 93, 47, 10],
              cash: 20,
            },
            {
              numbers: [26, 32, 86, 66, 40],
              cash: 60,
            },
          ],
        },
      ],
    },
    {
      _id: "63ed2fc5d915aafa016e3ec2",
      numbers: {
        fijo: 25,
        corrido_1: 33,
        corrido_2: 50,
      },
      date: "6-2-2023",
      schedule: "noche",
      lists: [
        {
          name: "M",
          single: [
            {
              number: 19,
              fijo: 45,
              corrido: 50,
            },
            {
              number: 29,
              fijo: 35,
              corrido: 40,
            },
            {
              number: 1,
              fijo: 80,
              corrido: 20,
            },
            {
              number: 82,
              fijo: 80,
              corrido: 55,
            },
            {
              number: 25,
              fijo: 50,
              corrido: 60,
            },
          ],
          parlet: [
            {
              numbers: [80, 43, 26, 15, 0],
              cash: 20,
            },
            {
              numbers: [5, 8, 93, 47, 10],
              cash: 20,
            },
            {
              numbers: [26, 32, 86, 66, 40],
              cash: 60,
            },
          ],
        },
        {
          name: "J",
          single: [
            {
              number: 18,
              fijo: 40,
              corrido: 20,
            },
            {
              number: 25,
              fijo: 30,
              corrido: 10,
            },
            {
              number: 99,
              fijo: 100,
              corrido: 200,
            },
            {
              number: 84,
              fijo: 50,
              corrido: 35,
            },
            {
              number: 15,
              fijo: 50,
              corrido: 60,
            },
          ],
          parlet: [
            {
              numbers: [50, 41, 36, 25, 10],
              cash: 20,
            },
            {
              numbers: [55, 81, 96, 45, 20],
              cash: 50,
            },
            {
              numbers: [26, 32, 86, 66, 40],
              cash: 60,
            },
          ],
        },
      ],
    },
    ...actionInfo.action.payload,
  ];
  const updatedDocuments = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: documentsDef },
  };
  next(updatedDocuments);
};

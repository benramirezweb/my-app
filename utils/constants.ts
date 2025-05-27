export const dummyData = {
  "patients": [
      {
          "id": 10,
          "name": "Fernando Fernández"
      },
      {
          "id": 12,
          "name": "Pedro Pedrero"
      },
      {
          "id": 14,
          "name": "Juan Juanes"
      },
      {
        "id": 15,
        "name": "Jhon Doe"
    }
  ],
  "beds": [
      {
          "id": 21,
          "location": "Hab 201, piso 2"
      },
      {
          "id": 22,
          "location": "Hab 202, piso 2"
      }
  ],
  "hospitalizations": [
      {
          "patient_id": 10,
          "bed_id": 21,
          "date": "2024-10-28"
      },
      {
          "patient_id": 12,
          "bed_id": 22,
          "date": "2024-10-28"
      },
      {
        "patient_id": 15,
        "bed_id": 22,
        "date": "2024-10-28"
      },
      {
        "patient_id": 14,
        "bed_id": 22,
        "date": "2024-10-30"
      },
      {
          "patient_id": 10,
          "bed_id": 21,
          "date": "2024-10-29"
      },
  ]
};
import { LinkData } from "@tipos/component";

export const LINKS: LinkData[] = [
  {
    id: 1,
    title: "NOSOTROS",
    links: [{ titulo: "¿Quiénes somos?", ariaLabel: "navegar a seccion quienes somos", to: "#" }]
  },
  {
    id: 2,
    title: "SERVICIOS",
    links: [
      {
        titulo: "Agendá una cita",
        ariaLabel: "navegar a la seccion de agendar cita",
        to: "#"
      },
      {
        titulo: "Consulta sobre nuestros médicos",
        ariaLabel: "navegar a la seccion medicos disponibles",
        to: "/medicos-disponibles"
      },
      {
        titulo: "Ver tus citas",
        ariaLabel: "navegar a la seccion ver tus citas",
        to: "#"
      }
    ]
  },
  {
    id: 3,
    title: "RECURSOS",
    links: [{ titulo: "Preguntas frecuentes", ariaLabel: "navegar a la seccion de preguntas frecuentes", to: "#" }]
  },
];

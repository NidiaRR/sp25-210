## Field Trip Project

### Project Summary

This web project showcases the exhibition _Voices from the Arctic: Contemporary Inuit Art_, which explores the evolution of Inuit sculpture and printmaking from the 1960s to the present. I chose this topic to highlight the deep cultural roots and modern narratives of Inuit communities, especially as they respond to environmental and societal changes in the Arctic. The website aims to bridge cultural storytelling with digital interactivity, allowing users to experience Inuit voices, artistry, and perspectives in an engaging way.

### Core Webpages

1. **Home Page**

   - Overview of the exhibition with a rotating hero banner featuring key artworks.
   - Introduction video summarizing the purpose of the exhibit and Inuit art history.

2. **Artifact Gallery**

   - Interactive gallery of artworks with filters by decade, artist, and theme (e.g., tradition, environment, technology).
   - Hover effects reveal brief descriptions; clicking opens a detailed artifact page.

3. **Artifact Spotlight**

   - In-depth look at selected pieces, including artist bios, audio commentary, and 3D artifact models.
   - Includes a rotating feature on key pieces like a 1960s soapstone carving and a modern print exploring climate change.

4. **Timeline of Inuit Art**

   - Interactive timeline showing historical context and major movements in Inuit art from the 1960s to now.
   - Users can click events to view related works and descriptions.

5. **Voices Section**

   - Video and audio interviews with Inuit artists and community members.
   - Users can submit questions for artists or reflections via a form, fostering community interaction.

6. **Events Page**
   - Calendar of related museum events including artist talks, trunk shows, and workshops.
   - RSVP functionality and integration with ticketing.

### Design Choices

- **Styling Influences**

  - Inspired by museum websites like the Smithsonian's National Museum of the American Indian and the Inuit Art Foundation site.
  - Clean, modern design with cultural accents (Inuit symbols, Arctic textures).

- **Color Scheme**

  - **Ice Blue (#d0e7f9):** Background color representing the Arctic environment.
  - **Charcoal Gray (#2e2e2e):** Used for text to ensure high readability.
  - **Coral Red (#e36f6f):** Highlights call-to-action buttons and interactive elements to reflect energy and urgency (climate themes).
  - **Bone White (#fdfaf6):** Used for artifact backgrounds to simulate traditional materials like bone and ivory.

- **Data Structure**
  - Artifacts stored as objects in a JSON array with properties like `title`, `artist`, `year`, `medium`, `theme`, and `imageURL`.
  - Timeline events as an array of chronological entries tied to artifact IDs.
  - Interactive elements tied to an `engagement` module that logs user clicks and content views for educational feedback.

This project seeks to honor the stories and artistic innovation of Inuit communities, while using modern web technologies to educate and inspire wider audiences. C:

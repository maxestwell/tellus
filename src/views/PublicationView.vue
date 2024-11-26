<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Publication'
})
</script>

<template>
  <div class="views">
    <header>
      <TheTitle :title="headerTitle" />
      <TheNav />
    </header>
    <div class="publication">
      <div class="writing">
        <div class="text-container">
          <h1>Documentation</h1>
        </div>
        <div class="text-container">
          <div class="text-container"><h2>Title of Publication</h2></div>
        </div>
        <p>Tellus</p>
        <div class="text-container">
          <div class="text-container"><h2>Description</h2></div>
        </div>
        <p>
          A curated audio archive of micro-interviews based around the 'Would you rather…?' concept.
          The idea is that the platform will also serve as a deposit point for users to contribute
          their responses for the next issue of the publication (which would offer a different
          'would you rather' scenario). The publication will draw from the Vox Pop concept-short for
          the Latin, 'Vox Populi'- meaning, "voice of the people". A Vox Pop seeks to gauge public
          opinion on a single, central question. The question could be connected to anything—whether
          it's something in the news, something silly, or something reflective.
        </p>
        <div class="text-container"><h2>Underpinning Message</h2></div>
        <p>
          The publication emphasises collective knowledge-building by creating a shared "library of
          perspectives". Each contribution to the publication adds to the understanding of a central
          question. Then, by hearing varied responses, users will be encouraged to be introspective,
          reflecting on their own views and others' views. In this way, "Would you rather…?"
          scenarios will be tools for self-reflection and bridge a connection with a broader
          audience, leading to ideas and insights that wouldn't arise alone.
        </p>
        <p>
          Each question, whether light-hearted or profound, is designed to let people reconsider
          their underlying values and perspectives, which are often influenced by cultural or social
          factors that we are sometimes not aware of. Users can explore their perspectives, with
          challenges to their existing perspectives, in a safe, anonymous and communal setting.
        </p>
        <p>
          Essentially, this platform is a way to "hear" diverse voices and learn from lived
          experiences. This helps with understanding our social world by allowing users to explore
          ideas outside their comfort zone. Each response can reveal new ways of framing the world
          that users wouldn't encounter in their own daily life, encouraging empathy in an
          increasingly divided online world.
        </p>
        <p>
          Listening to others' perspectives not only sparks personal growth but also encourages
          users to examine the social influences shaping their beliefs. One user found the poll
          helped them reflect on how they exercise their own privilege through assumptions made in
          daily life - i.e. access to quality healthcare, and the ability to spend leisure time and
          disconnect from work. The audience will see that by contributing, they're taking an active
          role in co-creating a unique community dialogue. They become part of a developing
          conversation, that reflects the collective consciousness of the group.
        </p>
        <h1>TARGET AUDIENCE</h1>
        <p>This publication will appeal to a range of audience characteristics and preferences.</p>
        <p>
          Philosophical thinkers and conversationalists enjoy hypothetical questions, thought
          experiments, and moral dilemmas. They value deep questions that encourage self-reflection,
          explore different perspectives, and delve into the mechanics of knowledge generation.
        </p>
        <p>
          In contrast, pop culture fans engage with "Would you rather…?" scenarios tied to current
          events or celebrity culture, finding fun and relevance in these timely references.
        </p>
        <p>
          Nostalgia seekers are drawn to questions that evoke personal memories and stories,
          particularly those that tap into nostalgia or reflect on personal growth.
        </p>
        <p>
          Active podcast listeners, from a media consumption standpoint, are a key group. These
          consumers enjoy short-form audio content in series or conversational formats. They are
          drawn to micro-interviews that offer a cross-section of others' lives.
        </p>
        <p>
          Users who are actively engaged with social media platforms like Instagram, TikTok, or
          Twitter, who are motivated to contribute content or respond to others.
        </p>
        <p>
          People with busy lifestyles prefer bite-sized content they can consume on the go.
          Micro-interviews and short scenarios fit easily into their lives and could be drawn to
          these platforms because they are a light-hearted break from their routines.
        </p>
        <p>
          People who enjoy being part of a community and are motivated, for a variety of reasons, to
          engage with and connect to, other users. Being part of an active, community dialogue is a
          powerful motivator. They are driven by hearing others' thoughts, understanding shared
          opinions, and connecting through mutual experiences.
        </p>
        <p>
          The publication will also appeal to users who are motivated to express their own personal
          beliefs and views.
        </p>
        <p>
          Lastly, curious, open-minded users who are interested in others' perspectives. They value
          hearing opinions they might not encounter or even agree within their everyday lives. They
          seek personal growth and wisdom by exploring other perspectives on both light-hearted and
          profound questions.
        </p>
        <h1>STYLISTIC APPROACH</h1>
        <div class="text-container">
          <h2>
            <a href="https://au.pinterest.com/maxestwell/tellus-website/">Moodboard</a>
          </h2>
        </div>
        <p>
          Through the use of nostalgia, the website's aesthetic reflects an early form of the
          internet, where websites were far more unique, personal and introspective.
        </p>
        <p>
          Incorporating signature elements of early websites reflects a big part of the identity of
          the publication. It Includes retro and stylistic elements featured in the 'Old Web',
          'y2k', and 'Memphis' designs such as:
        </p>
        <ul>
          <li>Customisation (profiles, mouse cursors, boarders, colours)</li>
          <li>Early Internet Lingo</li>
          <li>Pop-Ups (windows, notifications)</li>
          <li>Easter Eggs (random "mystery" links)</li>
          <li>
            Rewards (digital stickers, collectibles, profile customisability, experience levels)
          </li>
          <li>Nostalgia-Driven Prompts (90s/2000s internet/pop culture)</li>
          <li>
            Quirky Sections (Splash Page Intro, About, FAQ, Polls, Forums, data visualisation)
          </li>
          <li>
            Pixel Art and GIFs (low-resolution graphics, pixelated icons, fonts, colours, retro
            gradients, borders/frames, and visible scrollbars)
          </li>
        </ul>
        <p>
          This will enhance the feeling of nostalgia and the way users will interact with the
          publication.
        </p>
        <h1>CONTENT</h1>
        <p>
          There are two aspects of how the publication content is viewed by the public: User upload
          content and the publication uploaded content.<br />The user uploaded content includes
          their response to the 'Would You Rather' question and their profile which can include
          uploaded images, a short bio and location.
        </p>
        <p>
          The publication will make original writing, curated lists, pages and data visualisation
          (filters, stats) public.
        </p>
        <h1>PROTOTYPE SCOPE</h1>
        <div class="text-container"><h2>Scope & Key Elements</h2></div>
        <p>The website will be a static website (purely aesthetic, no functionality).</p>
        <div class="text-container"><h2>Limitations</h2></div>
        <p>
          The implementation to record a 'Would You Rather?' question is far too complicated to
          achieve. This would involve using a backend server and keeping voice recordings of users.
          This poses a risk in terms of security and privacy. This has been visually represented as
          a page on the website.
        </p>
        <h1>FUTURE DIRECTIONS</h1>
        <div class="text-container"><h2>Big Picture & Evolution</h2></div>
        <p>
          The plan is to have monthly editions so there is enough time for users to reflect,
          contribute and engage with the publication. A month will be enough time to get enough
          submissions. It will evolve and improve over time and adjustments can be made, for
          example, the time between editions can be shortened or made longer with relatively easily.
        </p>
        <div class="text-container"><h2>Physical release</h2></div>
        <h3>Physical Release & Expanding Reach</h3>
        <p>
          Tellus could potentially expand its reach by utilising various social media platforms. One
          idea might involve filming bite-sized interviews in strange places incongruent with the
          topic—for instance, talking about Wall Street beside a waterfall—to create visual and
          thematic contrast. Another possibility could be organising pop-up street interviews,
          although this would require further consideration to ensure it aligns with the
          publication's philosophy.
        </p>
        <h3>Interactive App or Periodic Updates</h3>
        <p>
          In the future, the publication could evolve into an app. This could encourage users to
          engage with friends and the wider online community, fostering continuous dialogue. This
          format might become a fun and interactive way for people to stay connected.
        </p>
        <h3>Artistic Exhibitions & Community Responses</h3>
        <p>
          Going full circle back to the initial concept of Tellus in Finland, the project could
          potentially be extended into physical exhibitions, showcasing community responses to
          specific questions. Artists could create pieces inspired by these responses, providing
          visitors with an immersive and reflective experience. Visitors could also contribute by
          recording or writing their answers on-site, gradually transforming the exhibition space,
          illustrating the evolving dialogue.
        </p>
        <h3>Creative AI Integration</h3>
        <p>
          In the future, the project might explore the use of AI to add a playful and experimental
          dimension. An AI trained on the archive of user responses could generate humorous or
          unexpected outputs, such as quirky "Would you rather?" scenarios or creative
          interpretations of user input. This could provide both entertainment and an interesting
          commentary on how AI interacts with human creativity.
        </p>
        <h1>ETHICAL & LEGAL OBLIGATIONS</h1>
        <p>
          The publication will need to be moderated to avoid potential issues arising with
          submissions from anonymous users. One way to mitigate this would be to have a traditional
          sign-up method where a user is prompted to input: First/Last name, e-mail (verification),
          username and location. This will only be available to the moderators.
        </p>
        <p>
          There are no age restrictions and no third-party data collection. Community guidelines
          will be included that stress the importance of abiding by respectful content that is
          non-political and relevant.
        </p>
        <p>
          The other legal and ethical obligation is to abide by copyright legislation. Ethically, it
          is inauthentic to use other's material without referencing, but by definition, this
          publication encourages and prompts self-reflection and personal perspectives. This
          provides some protection from copyright issues, but moderating the content is also a way
          to screen for breaches of copyright.
        </p>
        <div class="text-container"><h2>Acknowledging Indigenous Culture</h2></div>
        <p>
          These values are important when considering the indigenous people and Australian culture.
          There is a responsibility to acknowledge the traditional custodians and respect the
          traditional owners of this land. The question "Would you rather…?" is inclusive but one of
          the responsibilities of the moderation process would be to ensure that the content is
          respectful.
        </p>
        <h1>PROJECT VIABILITY</h1>
        <div class="text-container"><h2>Skills & Resources</h2></div>
        <p>
          A few resources are needed to develop the publication further. Firstly, access to a
          laptop, computer and software such as Visual Studio Code, GitHub and open-source software
          as well as access to community and public resources such as the library and academic
          institutions. This will support the future development and evolution of Tellus.
        </p>
        <p>
          Technical skills are needed for this publication to succeed. Competence and agility in
          software skills are key and an interest in developing these further provide the
          scaffolding on which other skills rely.
        </p>
        <p>
          An innate curiosity about people and a personal interest in exploring others' perspectives
          on a range of issues comes from intrinsic motivation. This enthusiasm for the publication
          is an essential skill required to stay motivated if/when there are challenges or
          roadblocks in any stage of the publication.
        </p>
        <p>
          These skills and resources will enhance the ability to continue developing the publication
          and expand to more platforms. There is no interest in exploring this publication for
          financial gain or personal recognition and this will help protect the ethical and legal
          boundaries of Tellus.
        </p>
        <div class="text-container"><h2>Funding & Sponsorships</h2></div>
        <p>
          Funding, sponsorships and collaborations could be arranged with institutions who are
          working to increase their online engagement. Institutions in Canberra like the Canberra
          Innovation Network could be an excellent choice to evolve this publication with funding.
        </p>
        <div class="text-container"><h2>Collaborations</h2></div>
        <p>
          Tellus is a flexible product allowing a safe and engaging way for a relevant target
          audience to stay engaged. Potential collaborations are with museums/galleries and within
          learning institutions such as schools or universities. Tellus could be a useful asset
          allowing a museum/gallery to enhance their audience reach by promoting their exhibitions.
          By asking content related "Would You Rathers?" audience interest can be focussed on a
          specific exhibition or on the museum/gallery overall, increasing their ability to stay
          engaged with or expand their customer base and stay viable.
        </p>
        <p>
          Teachers/educators could request curriculum-relevant questions and use Tellus as a launch
          pad for class discussions, stimulating discussion, enhancing respect for diverse opinion
          and enhancing learning in a safe environment.
        </p>
        <h1>LIST OF RESOURCES & REFERENCES</h1>
        <div class="text-container"><h2>Research references</h2></div>
        <ul>
          <li>
            <a href="https://www.kqed.org/education/vox-pop-curriculum">vox pop curriculum</a>
          </li>
          <li>
            <a href="https://voxpops.com/news/what-is-a-vox-pop/">what is a vox pop</a>
          </li>
          <li>
            <a
              href="https://www.act.gov.au/business/get-help-and-advice/canberra-innovation-network-cbrin"
              >https://www.act.gov.au/business/get-help-and-advice/canberra-innovation-network-cbrin</a
            >
          </li>
          <li>
            <a href="https://willyoupressthebutton.com/">https://willyoupressthebutton.com/</a>
          </li>
        </ul>
        <div class="text-container"><h2>Development resources</h2></div>
        <ul>
          <li><a href="https://www.ableton.com/en/live/what-is-live/">Ableton Live</a></li>
          <li>ChatGPT</li>
        </ul>
        <h4>Stock photos</h4>
        <ul>
          <li>
            <a
              href="https://www.freepik.com/free-vector/realistic-rave-sticker-design_42113467.htm#fromView=search&amp;page=1&amp;position=33&amp;uuid=8a95c452-3ecc-473e-aae3-03a8ee74a84a"
            >
              sticker illustration
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-vector/set-circular-page-curl-sticker-template-design_361061246.htm#fromView=search&page=1&position=21&uuid=f5408efe-8594-4f33-b774-aa5ef428e0af"
            >
              sticker
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-vector/human-hands-set_956071.htm#fromView=search&page=1&position=11&uuid=f513a4df-5c28-4089-8cb4-7e276b6037aa"
            >
              hand
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-vector/hand-drawn-foot-cartoon-illustration_172782095.htm#fromView=search&page=1&position=20&uuid=46b34b51-ebf3-48a4-bcf9-6acf6471c5ab"
            >
              foot
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.publication {
  height: 100%;
  width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 700,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
  -webkit-text-stroke: 2px #181818;
  mix-blend-mode: difference;
}

p {
  font-family: 'adapter-mono-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 600,
    'slnt' 0,
    'ital' 1,
    'BORD' 300;
}

ul li {
  list-style-type: none;
  font-family: 'adapter-mono-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 600,
    'slnt' 0,
    'ital' 1,
    'BORD' 300;
}
</style>

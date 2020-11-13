import React from 'react'
import './WhenDinosaursLived.css'
import {eras} from '../../constants'

const WhenDinosaursLived = () => {
    return (
        <div>
            <div className="text">
                <p className="title">Geologic time scale and the rise and fall of the dinosaurs.</p>
                Is a system of chronological dating used by geologist, paleontologists and earth scientists to describe
                time, relationships in geologic history. By studying different layers of the earths crusts scientists have
                developed a time scale that can show when different spieces of plants and animals first appeared and went
                exctinct with reasonable accuracy. Geologists ea recognize 22 geological time periods and 14 Era's that
                played a vital part in the evolution of life on earth. These time periods are:
            </div>
            <div className="text">
            <table>
                {eras.map(era => <tr><td>{era.name}</td><td>{era.period}</td></tr>)}
                
            </table>
            </div>
            <div className="text">
                According to this time scale the earth is 4.6 billion years old. It took 2,6 billion years before complex life
                forms first appeared. Mammals (Synapsids ) and archosaurs (diapsids birds, repitles and dinosaurs) first
                arose during the mid triassic period around 237 million years ago when life finally recovered after the
                permian extinction event that killed over 93% of life on earth.
            </div>
            <div className="text">
                The first dinosaurs Herrerasaurus and Eoraptor were discovered in Argentina; both were bipedal
                carnivores (meat-eaters that walked on two legs), and small in comparison to the giant dinosaurs that
                would follow. Eoraptor was the size of a cat, Herrerasaurus the size of a pony. The name dinosaurs means
                terrible lizzard and was first coined in 1847 by biologist Richard Owen after he saw a skeleton of
                Iguandon that was discovered by Gideon Mantell in 1825. It is currently believed that dinosaurs evolved
                from Thecodonts a crocodile like creature that shared ancestry with birds and pterosaurs. The early
                dinosaurs where small carniverous and omniverous creaturs that walked on two legs.
            </div>
            <div className="text">
                During the remainder of the triassic period into the jurrasic, and cretaceous period the climate on earth
                was very advantagous for the development of dinosaurs and they evolved into an incredible array of
                creatures.
            </div>
            <div className="text">
                65 million years ago after rulling the earth for more than 160 million years their reign came to a abrupt
                end. There are many different theories on what exactly caused their demise.
                Some scientists specualted that a plague or contatious disease spread among the dinosaurs killing them
                all. However, this would mean that it would have been an extremely contagious pathogen that was
                capable of not only crossing between diffrent dinosaur species but also crossing between plants and
                dinosaurs. The excistence of such a pathogen would be highly unlikely thus this theory is dismissed by
                many scientists.
            </div>
            <div className="text">
                A second theory was that small mammals ate dinosaur eggs, thereby reducing the dinosaur population
                until it became unsustainable. Another theory was that dinosaurs’ bodies became too big to be operated
                by their small brains. Both of these theories do not seem plausible. If dinosaurs’ brains were too small to
                be adaptive, they would not have flourished for 160 million years. Turtles are known to lay large
                kwantaties of eggs in order to insure atleast some of their offspring survive there is no reason not to
                assume that some dinosaurs species employed a similiar strategy. Extinction by massive egg eating
                seems to be unlikely.
            </div>
            <div className="text">
                This brings us to our 4th theory; climate change. Dinosaurs thrived in a warm, tropical climate with high
                humidity. Because many species of dinosaur were cold blooded they needed the warmth from the sun to
                maintain there body heath and ability to produce energy. Therefore it seems likely that they would not be
                able to survive in colder climates. Scientists have discovered evidence that the planet began to cool down
                in the late Mesozoic Era right around the time dinosaurs went extinct. However, not all species of
                dinosaur where cold blooded Orinthopods were warmblooded and crocodiles that lived among the
                dinosaur survived this extinction event. Furthermore, naturally accuring climate change is a very slow
                process which would have given dinosaurs ample time to adept to the new circumstances. Climate change
                alone does not seem to be a sufficient reason for extinction.
            </div>
            <div className="text">
                In 1956 Russian astronomer Joseph Shklovsky (1916-1985) came up with a new thesis. He theorized that
                rediation from a exploded supernova raining down on earth killed off the dinosaurs. There are two big
                problems with this theory. Why did the radiation just kill the dinosaurs and not the mamals, crocodiles or
                birds? Secondly, it does not take into account earths magnetosphere and ionosphere that protect life on
                our planet's surface from harmful radiation.
            </div>
            <div className="text">
                If such an event did occur it would have left evidence on the surface of the earth. Trace amounts of
                radiation dating back to the Cretaceous Period should have been found, but none ever was.
            </div>
            <div className="text">
                Currently, the most prominant and likely theory was postulated in 1981 when Luis Alvarez, a Nobel
                Prize-winning physicist and his son geologist Walter Alvarez were conducting research in Italy.[1] They
                discovered a centimeter-thick layer of iridium-enriched clay that was deposited during the late cretaceous,
                right along the time dinosaurs went extinct. Iridium is not commonly found on earth but abundently
                present in space. Father and son Alvarez theorized that either a comet, meteor or asteroid must have
                colided with earth killing of the dinosaurs. At the time their theory was not well received by the scientific
                community. It was not until 1991 when scientists found a a massive meteor crater 110 miles in diameter
                on the edge of the Yucatán Peninsula, extending into the Gulf of Mexico that their theory was taken

                seriously. Named after a nearby villiage the Chicxulub Crater, appeared to be the smoking gun scientists
                where looking for.
            </div>
            <div className="text">
                The asteroid impact was devastating, It hit the earth with a speed of roughly 40.000 miles an hour and the
                energy of the collision produced an explosion of one million megaton. That is 2 million times more
                energy than the most powerful nuclear bomb ever detonated. The heat of the impact would have scorched
                the earth's surface. Setting forrests ablaze, creating tidal waves, tsunami's and vulcanic eruptions all over
                the planet. Many dinosaurs would have been burned, drowned suffocated or starved to dead. The debris
                from the impact would have clouded the atmosphere for months or years plunging the earth in to a
                freezing darkness. Many plant's, shrubs and trees would have died due to the lack of sunlight. Cold
                blooded animals would have suffered a similiar faith since they are dependent on the warmth of the sun to
                warm their bodies. With vegatation gone herbivors would be left without food starving to dead and
                carnivours would have fallowed soon after them.
            </div>
            <div className="text">
                It is estimanted that the Cretaceous–Paleogen extinction event killed around 75% of all living creatures on
                earth. The loss of biodiversty was equally devasting in the oceans as well as on land. Pleisosaurs, many
                species of shark, mosasaurs and mollusks all perished. Scientist believe that only small light creatures
                where able to survive by burrying themselves into the ground and scaviging whatever edible they could
                find.[2]
            </div>
            <div className="text">
                In 2016, a scientific drilling project obtained deep rock-core samples from the peak ring around the
                Chicxulub impact crater. The discoveries confirmed that the rock comprising the peak ring had been
                shocked by immense pressure and melted in just minutes from its usual state into its present form. Unlike
                sea-floor deposits, the peak ring was made of granite originating much deeper in the earth, which had
                been ejected to the surface by the impact. Gypsum is a sulfate-containing rock usually present in the
                shallow seabed of the region; it had been almost entirely removed, vaporized into the atmosphere.
                Further, the event was immediately followed by a megatsunami[sufficient to lay down the largest known
                layer of sand separated by grain size directly above the peak ring.[3]
            </div>
            <div className="text">
                These findings strongly support the impact theory. The impactor was large enough to create a 190-
                kilometer-wide (120 mi) peak ring, to melt, shock, and eject deep granite, to create colossal water
                movements, and to eject an immense quantity of vaporized rock and sulfates into the atmosphere, where
                they would have persisted for several years. This worldwide dispersal of dust and sulfates would have
                affected climate catastrophically, led to large temperature drops, and devastated the food chain.[4]
                In October 2019, researchers reported that the event rapidly acidified the oceans, producing ecological
                collapse and, in this way as well, produced long-lasting effects on the climate, and accordingly was a key
                reason for the end-Cretaceous mass extinction. In January 2020, scientists reported new evidence that the
                extinction event was mostly a result of the meteorite impact and not volcanism.[5]
            </div>
            <div className="text">
                As of now the meteorite impact seems to be the likely culprit in killing off the dinosaurs.
            </div>
            <div className="references">
                [1]<a href='https://www.history.com/topics/pre-history/why-did-the-dinosaurs-die-out-1'>Why did dinosaurs die out</a><br />
                [2]Jablonski, D.; Chaloner, W. G. (1994). "Extinctions in the fossil record (and discussion)". Philosophical Transactions of the Royal
                Society of London B. 344 (1307): 11–17.<br />

                [3]<a href='https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_extinction_event'>Cretaceous Paleogene extinction event</a> <br />
                [4]Hand, Eric (17 November 2016). "Updated: Drilling of dinosaur-killing impact crater explains buried circular hills". Science.<br />
                [5]Joel, Lucas (21 October 2019). "The dinosaur-killing asteroid acidified the ocean in a flash: The Chicxulub event was as damaging to
                life in the oceans as it was to creatures on land, a study shows". The New York Times. Archived from the original on 24 October 2019.
            </div>
        </div>


    )
}

export default WhenDinosaursLived

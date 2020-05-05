const img = document.getElementById('image');

    async function loadAndPredict() {
      const net = await bodyPix.load(/** optional arguments, see below **/);

      /**
       * One of (see documentation below):
       *   - net.segmentPerson
       *   - net.segmentPersonParts
       *   - net.segmentMultiPerson
       *   - net.segmentMultiPersonParts
       * See documentation below for details on each method.
       */
      const segmentation = await net.segmentPerson(img);
      console.log(segmentation);
    }
    loadAndPredict();
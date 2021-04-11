# Face Filter

This application utilizes the clmtrackr to track your face, and change the filter depending on the location of your face. The filters used are Opaque, Gray, and Invert.

The clmtrackr is a facial recognition Javascript library that assigns a number to 
certain points on your face. I have taken the point that is assigned to the tip of your
nose to follow the movement of the face. When your nose reaches a certain point, the image filter changes. I chose to track the nose because it is a central point on the face, and it can also work with turning your head, not just moving your head across the screen. 

Also in use is the P5 Javascript library, which inserts a canvas into the webpage, which allows the use of Processing sketches. 

Works best in Chrome, and requires access to your webcam.

Github Page for the face tracker: https://github.com/auduno/clmtrackr
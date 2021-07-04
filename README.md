INSTRUCTIONS TO RUNNING PROJECT:
================================

- Clone project
- Execute command: **sh ./setting.sh** to setting each project
- Execute command: **sh ./deploy.sh**  to running application in docker. Applications stay available in addres: http://localhost:80

ABOUT PROJECT:
==============

- This project challenge to myself understand, what is? why use it?
- What is micro frontend? It is one architecture where you split frontend application on many modules and each module is one regardless application using technologies more suitable to this part.
- Why use micro frontend? Imagine one scenary where you have one big frontend application, you have something problems: 
    - Change one part the application break another
    - Introduce new developers is hard because new dev needs learn about all product
    - Deploy frontend application is slow.
- When you apply micro frontend you prevent following problems: 
    - Deploy frontend application no more slow because you deploy only module that you work
    - Now necessary introduce all frontend application to new devs only necessary introduce only module where him work
    - Change one module no break another module because are separates applications.
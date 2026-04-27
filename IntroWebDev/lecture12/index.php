<?php
    
    // Working with objects in PHP
    class Books
    {
        /* member variables */
        var $price;
        var $title;

        public function __construct($par1, $par2)
        {
            $this->title = $par1;
            $this->price = $par2;
        }

        /* member functions */
        function setPrice($par)
        {
            $this->price = $par;
        }

        function getPrice()
        {
            $this->price . "<br/>";
        }

        function setTitle($par)
        {
            $this->title = $par;
        }

        function getTitle()
        {
            echo $this.title . "<br/>";
        }
    }

    //Creating objects in PHP
    $physics = new Books;
    $math = new Books;
    $chemistry = new Books;

    //Calling member functions
    $physics->setTitle('Physics for High School');
    $chemistry->setTitle('Advanced Chemistry');
    $math->setTitle('Algebra');

    $physics->setPrice(10);
    $chemistry->setPrice(15);
    $math->setPrice(7);

    //Get those values set
    $physics->getTitle();
    $chemistry->getTitle();
    $math->getTitle();

    $physics->getPrice();
    $chemistry->getPrice();

    $physics2 = new Books('Physics for college');
    $physics2->getTitle();

?>
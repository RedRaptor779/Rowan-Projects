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
?>
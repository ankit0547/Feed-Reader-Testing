/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        
         // Test for each feed objects URL should defined and not empty

         it('url should be defined and not empty',function(){
            allFeeds.forEach(function(feed){
                feedlink = feed.url;
                expect(feedlink).toBeDefined();
                expect(feedlink.length).not.toBe(0);

            })
         });


         
         // Test for each feed objects name should defined and not empty

         it('name should be defined and not empty',function(){
            allFeeds.forEach(function(feed){
                let feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
         });
    });


     //   New test suite named "The menu" 

       

          describe('The menu',function(){

            // Test for Body has hiding/showing CSS Class of menu element
            it('hidden menu',function(){
                expect($('body').hasClass('menu-hidden')).toBe(true);

                          });



             // Test for toggle classes to show menu

            it('toggles visibility on click', function() {
                $('a.menu-icon-link').trigger('click'); // show menu
                expect($('body').hasClass('menu-hidden')).toBe(false);

                $('a.menu-icon-link').trigger('click'); // hide menu again
                expect($('body').hasClass('menu-hidden')).toBe(true);
         });


            
            });


     // New test suite named "Initial Entries" 

       
         // Test for loadFeed function should work completely
        describe('Initial Entries', function() {
                // run before test
                beforeEach(function(done) {
                    loadFeed(0, done);
                });

                it('atleast a single element should be there', function(){
                    expect($('.feed .entry').length).toBeGreaterThan(0);
                });
            });


     // New test suite named "New Feed Selection" 


         // Test for content of loadFeed function changes
         
         describe('New Feed Selection', function(){
            var testfeed;

            // when a new feed is loaded by the loadFeed function that the content actually changes

            beforeEach(function(done) {
                loadFeed(0, function() {
                    testfeed = $('.feed').html();
                    loadFeed(1, done);
                });
            });

            // Check the newsfeed  html to be not same as previous.
            it('has been loaded', function(){
                expect($('.feed').html()).not.toEqual(testfeed);
            });
        });
}());

describe("file1.js", function() {
    describe("obj.methodOne() will be tested here", function() {
        it("test description", function() {
            expect(true); 
			expect(true).toBe(true); 
        });
    });
    describe("obj.methodTwo() will be tested here", function() {
        it("test description", function() {
            expect(null); 
        });
    });
});

describe("file2.js", function() {
    describe("obj will be tested here", function() {
        it("test description", function() {
            expect(null); 
        });
        describe("obj methods will be tested here", function() {
            it("test description", function() {
                expect(null); 
            });
            it("test description", function() {
                expect(null); 
            });
            it("test description", function() {
                expect(null); 
            });
        });
    });
});
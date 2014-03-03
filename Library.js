define(['underscore'], function (_) {

	/**
	 * @lends Library.prototype
	 */
	var library = {
		/**
		 * @constructor Library
		 * @classdesc A basic library/collection used to store and retrieve items.
		 * @param {Array.<*>} defs - The initial elements of the library.
		 */
		init: function (defs) {
			this.items = {};
			this.type = null;
			this.nameProperty = 'name';
			this.addItems(defs);
			return this;
		},
		/**
		 * Adds an item into the collection.
		 * @param {*} def - The item to be added.
		 * @param {string} [name] - The key for the element. If not given, an attempt will be made to read from the property of the item named in `this.nameProperty`.
		 */
		addItem: function (def, name) {
			name = name || def[this.nameProperty];
			this.items[name] = def;
		},
		/**
		 * Conveniency method to add an array of items at once to the collection.
		 * @param {Array.<*>} defs - The items to be added.
		 */
		addItems: function (defs) {
			_(defs).each(function (val) {
				this.addItem(val);
			}, this);
		},
		/**
		 * Retrieve an element from the collection by its key.
		 * @param {string} name - The key to look for.
		 * @returns {*}
		 */
		getItem: function (name) {
			return this.items[name];
		},
		/**
		 * Checks whether a key exists in the collection.
		 * @param {string} name - The key to look for.
		 * @returns {boolean}
		 */
		exists: function (name) {
			return name in this.items;
		}
	};

	return function Library () {
		var obj = Object.create(library, {
			constructor: { value: Library }
		});
		return obj.init.apply(obj, arguments);
	};
});
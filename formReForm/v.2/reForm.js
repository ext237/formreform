/**
 * reForm JavaScript for Form Layout, version 0.2
 * (c) 2008 Joe Lippeatt (joey@lippeatt.com)
 * 
 * reForm is freely distributable and open.  Please contribute improvements
 * back to the project.  
 */

ReForm = function(formDivId){

    this.outerDivClass50PctName = "field50Pct";
    this.outerDivClass100PctName = "field100Pct";
	this.outerDivCheckbox = "fieldCheckbox";
	
	this.labelDivClassName = "fieldItemLabel";
	this.inputDivClassName = "fieldItemValue";
	this.checkboxClassName = "fieldCheckboxItem";
	
	// formDivId required, creates formObj
    var formContainerDivObj = document.getElementById(formDivId);
    
    // create label collection
    var formLabelObjCollection = formContainerDivObj.getElementsByTagName("label");
    
	// create array of label and input objects
	var formObjArr = new Array();
	
    this.doReForm = function(){
                
        if (formLabelObjCollection.length > 0) {
        
            for (var i = 0; i < formLabelObjCollection.length; i++) {

                // get the current label for value
                var thisLabelForAttribute = formLabelObjCollection[i].getAttribute('for');

				// get the current label options form the rel value
				var thisLabelRelAttribute = formLabelObjCollection[i].getAttribute('rel');

				// get the element this item is "for"
                var thisEl = document.getElementById(thisLabelForAttribute);
                
				this.reFormElement(formLabelObjCollection[i], thisEl, thisLabelRelAttribute);
				
			}
        }
    }
	
	function elementInfo(label,element,options) {
		this.label = label;
		this.element = element;
		this.options = options;
	}
	
	this.reFormElement = function(labelEl, formInputEl, options) 
	{
		
		var elType = formInputEl.getAttribute('type');

		// outer div element holds both the label and the input object
		var outerDiv = document.createElement('div');
		// add the outer div to the form container
		formContainerDivObj.insertBefore(outerDiv,labelEl);

		// label div element holds and styles the label element
		var labelDiv = document.createElement('div');
		
		// input element div holds and styles the input element
		var inputDiv = document.createElement('div');

		// conditional formatting based on type of input
		if (elType != 'checkbox') {
		
			if (options == '100pct') 
				outerDiv.className = this.outerDivClass100PctName;
			else 
				outerDiv.className = this.outerDivClass50PctName;
			
			// class items
			labelDiv.className = this.labelDivClassName;
			inputDiv.className = this.inputDivClassName;

			// add the new labelDiv and inputDiv as children of the outerDiv
			outerDiv.appendChild(labelDiv);
			outerDiv.appendChild(inputDiv);
			
		} else {
			
			// class items
			outerDiv.className = this.outerDivCheckbox;
			labelDiv.className = this.labelDivClassName;
			inputDiv.className = this.checkboxClassName;

			// add the new label and input div's, but in reverse order
			outerDiv.appendChild(inputDiv);
			outerDiv.appendChild(labelDiv);
		}

		// reassign the labelEl and formInputEl
		labelDiv.appendChild(labelEl);
		inputDiv.appendChild(formInputEl);
	}
}



/* 
 * Copyright (c) 2016, Jakub Kaszycki
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

function nullToEmpty(a) {
	return a === null ? "&nbsp;" : a;
}

/**
 * Initializes chemistry, substitutes chemical formulas.
 * @returns {undefined}
 */
function chemistry_render() {
	var elements = document.getElementsByTagName("chemistry");
	for(var i = 0; i < elements.length; i++) {
		var element = elements[i];
		element.innerHTML = '<span class="chemistry-supsub"><sup class="chemistry-supsub-int">' + nullToEmpty(element.getAttribute("mass")) + '</sup><sub class="chemistry-supsub-int">' + nullToEmpty(element.getAttribute("number")) + '</sub></span>' + element.innerHTML + '<span class="chemistry-supsub"><sup class="chemistry-supsub-int2">' + nullToEmpty(element.getAttribute("valence")) + '</sup><sub class="chemistry-supsub-int2">' + nullToEmpty(element.getAttribute("count")) + '</sub></span>';
	}
}
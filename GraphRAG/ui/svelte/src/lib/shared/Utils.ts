//  Copyright (C) 2024 Intel Corporation
//  SPDX-License-Identifier: Apache-2.0

export function scrollToBottom(scrollToDiv: HTMLElement) {
	if (scrollToDiv) {
		setTimeout(
			() =>
				scrollToDiv.scroll({
					behavior: "auto",
					top: scrollToDiv.scrollHeight,
				}),
			100,
		);
	}
}

export function scrollToTop(scrollToDiv: HTMLElement) {
	if (scrollToDiv) {
		setTimeout(
			() =>
				scrollToDiv.scroll({
					behavior: "auto",
					top: 0,
				}),
			100,
		);
	}
}

export function getCurrentTimeStamp() {
	return Math.floor(new Date().getTime());
}

export function fromTimeStampToTime(timeStamp: number) {
	return new Date(timeStamp * 1000).toTimeString().slice(0, 8);
}

export function formatTime(seconds) {
	const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
	const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
	const remainingSeconds = String(seconds % 60).padStart(2, "0");
	return `${hours}:${minutes}:${remainingSeconds}`;
}

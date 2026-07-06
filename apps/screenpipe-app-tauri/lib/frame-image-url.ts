import { appendAuthToken, getApiBaseUrl } from "@/lib/api";

export function frameImageUrl(
	frameId: number | string,
	options: { exact?: boolean; retry?: number } = {},
): string {
	const params = new URLSearchParams();
	if (options.exact) {
		params.set("fallback", "false");
	}
	if (options.retry != null) {
		params.set("retry", String(options.retry));
	}

	const query = params.toString();
	const url = `${getApiBaseUrl()}/frames/${frameId}${query ? `?${query}` : ""}`;
	return appendAuthToken(url);
}

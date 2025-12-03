# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from tests.utils import assert_matches_type
from khulnasoft_api import KhulnasoftAPI, AsyncKhulnasoftAPI
from khulnasoft_api.types import StoreListInventoryResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestStore:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_method_list_inventory(self, client: KhulnasoftAPI) -> None:
        store = client.store.list_inventory()
        assert_matches_type(StoreListInventoryResponse, store, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_raw_response_list_inventory(self, client: KhulnasoftAPI) -> None:
        response = client.store.with_raw_response.list_inventory()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        store = response.parse()
        assert_matches_type(StoreListInventoryResponse, store, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    def test_streaming_response_list_inventory(self, client: KhulnasoftAPI) -> None:
        with client.store.with_streaming_response.list_inventory() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            store = response.parse()
            assert_matches_type(StoreListInventoryResponse, store, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncStore:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_method_list_inventory(self, async_client: AsyncKhulnasoftAPI) -> None:
        store = await async_client.store.list_inventory()
        assert_matches_type(StoreListInventoryResponse, store, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_raw_response_list_inventory(self, async_client: AsyncKhulnasoftAPI) -> None:
        response = await async_client.store.with_raw_response.list_inventory()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        store = await response.parse()
        assert_matches_type(StoreListInventoryResponse, store, path=["response"])

    @pytest.mark.skip(reason="Prism tests are disabled")
    @parametrize
    async def test_streaming_response_list_inventory(self, async_client: AsyncKhulnasoftAPI) -> None:
        async with async_client.store.with_streaming_response.list_inventory() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            store = await response.parse()
            assert_matches_type(StoreListInventoryResponse, store, path=["response"])

        assert cast(Any, response.is_closed) is True

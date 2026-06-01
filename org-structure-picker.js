// Independent searchable selects for Nové stredisko / oddelenie / útvar (no parent-child filtering)

(function (global) {
    const PLACEHOLDER_ACTIVE = 'Vyberte alebo začnite písať...';
    const FIELD_CONFIG = [
        { key: 'str', inputId: 'new-org-str', listId: 'new-org-str-list', lookupType: 'stredisko' },
        { key: 'odd', inputId: 'new-org-odd', listId: 'new-org-odd-list', lookupType: 'oddelenie' },
        { key: 'utvar', inputId: 'new-org-utvar', listId: 'new-org-utvar-list', lookupType: 'utvar' }
    ];

    const pickerState = {
        optionsByKey: { str: [], odd: [], utvar: [] },
        mounted: false
    };

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function normalizeOption(row) {
        const code = (row.code || row.value || '').trim();
        const label = (row.label || row.name || code).trim();
        if (!code) return null;
        return { value: code, label: label || code };
    }

    async function loadLookupOptions(supabase, lookupType) {
        if (!supabase) return [];
        try {
            const { data, error } = await supabase
                .from('org_lookup_values')
                .select('code, label')
                .eq('lookup_type', lookupType)
                .order('label');
            if (error) {
                console.warn(`org_lookup_values (${lookupType}):`, error.message || error);
                return [];
            }
            return (data || []).map(normalizeOption).filter(Boolean);
        } catch (error) {
            console.warn(`org_lookup_values (${lookupType}):`, error);
            return [];
        }
    }

    function renderOptions(listEl, options, filterText) {
        const query = (filterText || '').trim().toLowerCase();
        const filtered = !query
            ? options
            : options.filter((opt) => {
                const haystack = `${opt.label} ${opt.value}`.toLowerCase();
                return haystack.includes(query);
            });

        if (filtered.length === 0) {
            listEl.innerHTML = '<div class="searchable-select-empty">Žiadna zhoda v zozname</div>';
            return;
        }

        listEl.innerHTML = filtered
            .map((opt) => (
                `<button type="button" class="searchable-select-option" data-value="${escapeHtml(opt.value)}" data-label="${escapeHtml(opt.label)}">${escapeHtml(opt.label)}</button>`
            ))
            .join('');
    }

    function bindPicker(fieldKey, input, listEl) {
        input.disabled = false;
        input.placeholder = PLACEHOLDER_ACTIVE;
        input.autocomplete = 'off';

        const showList = () => {
            renderOptions(listEl, pickerState.optionsByKey[fieldKey] || [], input.value);
            listEl.classList.add('open');
        };

        const hideList = () => {
            listEl.classList.remove('open');
        };

        input.addEventListener('focus', showList);
        input.addEventListener('input', showList);

        input.addEventListener('blur', () => {
            window.setTimeout(hideList, 150);
        });

        listEl.addEventListener('mousedown', (event) => {
            const optionBtn = event.target.closest('.searchable-select-option');
            if (!optionBtn) return;
            event.preventDefault();
            input.value = optionBtn.dataset.label || optionBtn.dataset.value || '';
            input.dataset.selectedCode = optionBtn.dataset.value || '';
            hideList();
        });

        input.addEventListener('change', () => {
            input.dataset.selectedCode = input.value.trim();
        });
    }

    async function loadAllOptions(supabase) {
        const results = await Promise.all(
            FIELD_CONFIG.map((field) => loadLookupOptions(supabase, field.lookupType))
        );
        FIELD_CONFIG.forEach((field, index) => {
            pickerState.optionsByKey[field.key] = results[index] || [];
        });
    }

    function mountPickers() {
        if (pickerState.mounted) return;
        FIELD_CONFIG.forEach((field) => {
            const input = document.getElementById(field.inputId);
            const listEl = document.getElementById(field.listId);
            if (!input || !listEl) return;
            bindPicker(field.key, input, listEl);
        });
        pickerState.mounted = true;
    }

    function resetPickers() {
        FIELD_CONFIG.forEach((field) => {
            const input = document.getElementById(field.inputId);
            const listEl = document.getElementById(field.listId);
            if (input) {
                input.value = '';
                input.dataset.selectedCode = '';
                input.disabled = false;
                input.placeholder = PLACEHOLDER_ACTIVE;
            }
            if (listEl) {
                listEl.classList.remove('open');
                listEl.innerHTML = '';
            }
        });
    }

    function getValues() {
        const values = {};
        FIELD_CONFIG.forEach((field) => {
            const input = document.getElementById(field.inputId);
            if (!input) return;
            const label = input.value.trim();
            const code = (input.dataset.selectedCode || label).trim();
            values[field.key] = label ? { code, label } : null;
        });
        return values;
    }

    async function initOrgStructurePickers(supabase) {
        pickerState.mounted = false;
        await loadAllOptions(supabase);
        mountPickers();
    }

    global.orgStructurePicker = {
        initOrgStructurePickers,
        resetPickers,
        getValues,
        PLACEHOLDER_ACTIVE
    };
})(window);
